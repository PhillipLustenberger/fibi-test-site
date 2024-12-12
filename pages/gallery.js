import Header from '../app/components/Header';

export default function Gallery() {
  return (
    <div>
      <Header />
      <section>
        <h1>Galerie</h1>
        <p>Hier sind einige meiner neuesten Arbeiten.</p>
        <div className="gallery">
          <img src="/images/lustenberger1.jpg" alt="Foto 1" />
          <img src="/images/lustenberger2.jpg" alt="Foto 2" />
          <img src="/images/lustenberger3.jpg" alt="Foto 3" />
          <img src="/images/lustenberger4.jpg" alt="Foto 4" />
        </div>
      </section>
    </div>
  );
}
