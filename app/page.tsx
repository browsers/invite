import styles from "./page.module.css";
import TargetCursor from "./TargetCursor";
import Splash from "./Splash";
import ScrollIndicator from "./ScrollIndicator";
import SocialMenu from "./SocialMenu";
import GradualBlur from "./GradualBlur";

type Social = { label: string; href: string };

type Person = {
  name: string;
  handle: string;
  img: string;
  tiktok?: Social[];
  x?: Social[];
  instagram?: Social[];
  discord?: string;
};

const people: Person[] = [
  {
    name: "hamfy",
    handle: "@miniscules",
    img: "/hamfy.webp",
    x: [{ label: "@rebasing", href: "https://x.com/rebasing" }],
    tiktok: [{ label: "@factor", href: "https://tiktok.com/@factor" }],
    discord: "https://discord.com/users/355869591278452746",
  },
  {
    name: "889",
    handle: "@889",
    img: "/889.png",
    x: [
      { label: "@caplet", href: "https://x.com/caplet" },
      { label: "@xpd", href: "https://x.com/xpd" },
      { label: "@uey", href: "https://x.com/uey" },
    ],
    tiktok: [{ label: "@itch", href: "https://tiktok.com/@itch" }],
    instagram: [{ label: "@examples", href: "https://instagram.com/examples" }],
    discord: "https://discord.com/users/1163467824539381770",
  },
];

const secondPage: Person[] = [
  {
    name: "hids",
    handle: "@4x2",
    img: "/hids.png",
    tiktok: [{ label: "@ur9", href: "https://tiktok.com/@ur9" }],
    discord: "https://discord.com/users/1163458612295913523",
  },
  {
    name: "hurt",
    handle: "@khr6n",
    img: "/hurt.png",
    tiktok: [{ label: "@sanctum", href: "https://tiktok.com/@sanctum" }],
    discord: "https://discord.com/users/1011383110014861495",
  },
  {
    name: "nift",
    handle: "@nif7ay",
    img: "/nift.png",
    instagram: [{ label: "@satchel", href: "https://instagram.com/satchel" }],
  },
];

function TikTok() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>TikTok</title>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>X</title>
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>Instagram</title>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

function Discord() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>Discord</title>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

function ProfileCard({ person: p }: { person: Person }) {
  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`${styles.avatar} cursor-target`} src={p.img} alt={p.name} />
      <div className={styles.name}>{p.name}</div>
      <div className={styles.handle}>{p.handle}</div>
      <div className={styles.icons}>
        {p.x ? (
          <div className={`${styles.socialMenu} cursor-target`} data-cursor-padding="0">
            <SocialMenu
              options={p.x}
              trigger={
                <span className={styles.glyphX}>
                  <XLogo />
                </span>
              }
              ariaLabel={`${p.name} on X`}
            />
          </div>
        ) : null}
        {p.tiktok ? (
          <div className={`${styles.socialMenu} cursor-target`} data-cursor-padding="0">
            <SocialMenu
              options={p.tiktok}
              trigger={
                <span className={styles.glyphTiktok}>
                  <TikTok />
                </span>
              }
              ariaLabel={`${p.name} on TikTok`}
            />
          </div>
        ) : null}
        {p.instagram ? (
          <div className={`${styles.socialMenu} cursor-target`} data-cursor-padding="0">
            <SocialMenu
              options={p.instagram}
              trigger={
                <span className={styles.glyphInstagram}>
                  <Instagram />
                </span>
              }
              ariaLabel={`${p.name} on Instagram`}
            />
          </div>
        ) : null}
        {p.discord ? (
          <div className={`${styles.socialMenu} cursor-target`} data-cursor-padding="0">
            <SocialMenu
              options={[{ label: p.handle, href: p.discord }]}
              trigger={
                <span className={styles.glyphDiscord}>
                  <Discord />
                </span>
              }
              ariaLabel={`${p.name} on Discord`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Splash />
      <TargetCursor spinDuration={2} />
      <ScrollIndicator count={2} />
      <GradualBlur
        position="top"
        target="page"
        height="6rem"
        strength={2}
        layers={8}
        curve="linear"
        exponential
        autoHide
      />
      <GradualBlur
        position="bottom"
        target="page"
        height="6rem"
        strength={2}
        layers={8}
        curve="linear"
        exponential
        autoHide
      />
      <section className={styles.page} id="page-1">
        <div className={styles.row}>
          {people.map((p) => (
            <ProfileCard key={p.handle} person={p} />
          ))}
        </div>
        <div className={styles.scrollHint} aria-hidden="true">
          <span>scroll</span>
          <span className={styles.chevron} />
        </div>
      </section>
      <section className={`${styles.page} ${styles.pageTwo}`} id="page-2">
        <div className={styles.pageTwoContent}>
          <div className={styles.row}>
            {secondPage.map((p) => (
              <ProfileCard key={p.handle} person={p} />
            ))}
          </div>
          <div className={styles.invite}>
            <p className={styles.inviteText}>
              message @minuscules on discord to be on this page
            </p>
            <a
              className={`${styles.discordButton} cursor-target`}
              data-cursor-padding="4"
              href="https://discord.com/users/355869591278452746"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.discordGlyph} aria-hidden="true" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}