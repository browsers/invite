"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

type Props = {
  count: number;
};

export default function ScrollIndicator({ count }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight || 1;
      const i = Math.round(window.scrollY / vh);
      setActive(Math.max(0, Math.min(count - 1, i)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  const go = (i: number) => {
    window.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
  };

  return (
    <nav className={styles.rail} aria-label="Pages">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`${styles.item} ${i === active ? styles.active : ""} cursor-target`}
          data-cursor-padding="2"
          onClick={() => go(i)}
          aria-label={`Go to page ${i + 1}`}
          aria-current={i === active ? "true" : undefined}
        >
          <span className={styles.mark} />
        </button>
      ))}
    </nav>
  );
}
