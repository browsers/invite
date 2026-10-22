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
  hideDefaultCursor = true,
  padding = 8,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const corners = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = root.current;
    if (!el) return;

    if (hideDefaultCursor) document.documentElement.classList.add("tc-hide");

    let target: Element | null = null;
    let mx = 0;
    let my = 0;
    let seen = false;

    const place = (hw: number, hh: number) => {
      const [tl, tr, br, bl] = corners.current;
      tl.style.transform = `translate(${-hw}px, ${-hh}px)`;
      tr.style.transform = `translate(${hw - SIZE}px, ${-hh}px)`;
      br.style.transform = `translate(${hw - SIZE}px, ${hh - SIZE}px)`;
      bl.style.transform = `translate(${-hw}px, ${hh - SIZE}px)`;
    };

    const lock = (t: Element) => {
      const r = t.getBoundingClientRect();
      el.classList.add("locked");
      el.style.transform = `translate(${r.left + r.width / 2}px, ${r.top + r.height / 2}px)`;
      place(r.width / 2 + padding, r.height / 2 + padding);
    };

    const unlock = () => {
      target = null;
      el.classList.remove("locked");
      el.style.transform = `translate(${mx}px, ${my}px)`;
      place(IDLE, IDLE);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        seen = true;
        el.classList.add("visible");
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
        el.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const refresh = () => target && lock(target);
    const onLeave = () => el.classList.remove("visible");
    const onEnter = () => seen && el.classList.add("visible");

    place(IDLE, IDLE);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("tc-hide");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", refresh);
      window.removeEventListener("resize", refresh);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [targetSelector, hideDefaultCursor, padding]);

  return (
    <div ref={root} className="tc-root" aria-hidden>
      <div className="tc-spin" style={{ animationDuration: `${spinDuration}s` }}>
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
