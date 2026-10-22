import styles from "./page.module.css";
import TargetCursor from "./TargetCursor";

const people = [
  { name: "hamfy", handle: "@miniscules", img: "/hamfy.webp" },
  { name: "889", handle: "@889", img: "/889.png" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <TargetCursor spinDuration={2} hideDefaultCursor />
      <div className={styles.row}>
        {people.map((p) => (
          <div className={`${styles.card} cursor-target`} key={p.handle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.avatar} src={p.img} alt={p.name} />
            <div className={styles.name}>{p.name}</div>
            <div className={styles.handle}>{p.handle}</div>
          </div>
        ))}
      </div>
    </main>
  );
}