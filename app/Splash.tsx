"use client";

import { useRef, useState } from "react";
import styles from "./Splash.module.css";

export default function Splash() {
  const audio = useRef<HTMLAudioElement>(null);
  const [entered, setEntered] = useState(false);
  const [gone, setGone] = useState(false);

  const enter = () => {
    if (entered) return;
    setEntered(true);
    const a = audio.current;
    if (a) {
      a.volume = 0.6;
      a.play().catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audio} src="/music.mp3" loop preload="auto" />
      {!gone && (
        <div
          className={`${styles.splash} ${entered ? styles.out : ""}`}
          onClick={enter}
          onTransitionEnd={() => entered && setGone(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && enter()}
        >
          <span className={styles.text}>click to enter</span>
        </div>
      )}
    </>
  );
}
