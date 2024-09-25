import Image from "next/image";
import { Button } from "@repo/design-system/components/ui/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>         
        </div>

        <Button variant="destructive">Click Me</Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://matinkhani.medium.com/create-a-turborepo-with-nextjs-tailwindcss-shadcn-6e6ecfd52aea"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example project walktrough
        </a>
      </footer>
    </div>
  );
}
