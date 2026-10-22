"use client";

import { useEffect, useRef } from "react";
import "./TargetCursor.css";

type Props = {
  targetSelector?: string;
  spinDuration?: number; // seconds per full rotation while idle
  hideDefaultCursor?: boolean;
  padding?: number; // gap between target and brackets when locked
};

const SIZE = 10; // bracket arm box size
const IDLE = 13; // bracket distance from center when idle

export default function TargetCursor({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = false,
  padding = 8,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const corners = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = root.current;
    if (!el) return;

    const spin = el.querySelector<HTMLElement>(".tc-spin")!;
    let target: Element | null = null;
    let mx = 0;
    let my = 0;
    let cx = 0; // current (smoothed) position
    let cy = 0;
    let dx = 0; // desired position
    let dy = 0;
    let rot = 0;
    let rotTarget: number | null = null; // set while locked
    let seen = false;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      // frame-rate independent exponential smoothing
      const k = 1 - Math.exp(-dt / (target ? 70 : 40));
      cx += (dx - cx) * k;
      cy += (dy - cy) * k;
      el.style.transform = `translate(${cx}px, ${cy}px)`;

      if (rotTarget !== null) {
        rot += (rotTarget - rot) * (1 - Math.exp(-dt / 60));
      } else {
        rot += (360 / (spinDuration * 1000)) * dt;
      }
      spin.style.transform = `rotate(${rot}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const place = (hw: number, hh: number) => {
      const [tl, tr, br, bl] = corners.current;
      tl.style.transform = `translate(${-hw}px, ${-hh}px)`;
      tr.style.transform = `translate(${hw - SIZE}px, ${-hh}px)`;
      br.style.transform = `translate(${hw - SIZE}px, ${hh - SIZE}px)`;
      bl.style.transform = `translate(${-hw}px, ${hh - SIZE}px)`;
    };

    const lock = (t: Element) => {
      const r = t.getBoundingClientRect();
      el.classList.add("locked", "visible");
      dx = r.left + r.width / 2;
      dy = r.top + r.height / 2;
      // settle on the nearest quarter turn (45deg at most). On an odd quarter
      // turn the frame is sideways, so swap width/height to end up correct.
      const k = Math.round(rot / 90);
      rotTarget = k * 90;
      const pad = Number(t.getAttribute("data-cursor-padding") ?? padding);
      const hw = r.width / 2 + pad;
      const hh = r.height / 2 + pad;
      if (Math.abs(k) % 2 === 1) place(hh, hw);
      else place(hw, hh);
    };

    const unlock = () => {
      target = null;
      el.classList.remove("locked", "visible");
      rotTarget = null;
      dx = mx;
      dy = my;
      place(IDLE, IDLE);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        seen = true;
        cx = dx = mx;
        cy = dy = my;
      }
      const t = (e.target as Element | null)?.closest?.(targetSelector) ?? null;
      if (t) {
        // locked: stays put, does NOT follow the mouse
        if (t !== target) {
          target = t;
          lock(t);
        }
      } else if (target) {
        unlock();
      } else {
        dx = mx;
        dy = my;
      }
    };

    const refresh = () => target && lock(target);
    const onLeave = () => el.classList.remove("visible");
    const onEnter = () => {
      if (seen && target) lock(target);
    };

    place(IDLE, IDLE);
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("tc-hide");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", refresh);
      window.removeEventListener("resize", refresh);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [targetSelector, hideDefaultCursor, padding, spinDuration]);

  return (
    <div ref={root} className="tc-root" aria-hidden>
      <div className="tc-spin">
        <div className="tc-dot" />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`tc-corner tc-c${i}`}
            ref={(n) => {
              if (n) corners.current[i] = n;
            }}
          />
        ))}
      </div>
    </div>
  );
}