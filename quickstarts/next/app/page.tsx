import Image from "next/image";
import styles from "./page.module.css";
import Connect from "./connect";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logos}>
          <Image
            className={styles.logo}
            src="/mm-fox.svg"
            alt="MetaMask logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className={styles.connect}>
          <Connect />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/MetaMask/metamask-sdk-examples/tree/main/quickstarts/next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Example Code
        </a>
        <a
          href="https://docs.metamask.io/sdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to MetaMask SDK Documentation →
        </a>
      </footer>
    </div>
  );
}
