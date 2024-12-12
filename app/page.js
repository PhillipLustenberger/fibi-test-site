import Header from './components/Header';
import styles from './page.module.css';


export default function Home() {
  return (
    <div>
            <Header />
      <section className={styles.hero}>
        <img src="/images/hero-image.jpg" alt="Hauptbild" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>Willkommen auf meiner Fotografen-Website</h1>
          <p>Entdecke meine Arbeiten und lass dich inspirieren.</p>
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Galerie</h2>
        <div className={styles.grid}>
          <img src="/images/lustenberger1.jpg" alt="Foto 1" />
          <img src="/images/lustenberger2.jpg" alt="Foto 2" />
          <img src="/images/lustenberger3.jpg" alt="Foto 3" />
          <img src="/images/lustenberger4.jpg" alt="Foto 4" />
        </div>
      </section>
    </div>
  );
}
