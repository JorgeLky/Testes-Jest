import styles from "./page.module.css";

import AccessPage from "@/pages/AccessPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <AccessPage />
      </div>
    </main>
  );
}
