import './WomenInTech.css';


function WomenInTech() {
  return (
    <div className="women-tech-container">
      <header className="hero">
        <h2>Women in Tech</h2>
        <p>Celebrating the women who are changing the world of technology and development.</p>
      </header>

      <section className="quotes-section">
        <div className="quote">
          <p>"The most damaging phrase in the language is 'We've always done it this way.'" - Grace Hopper</p>
        </div>
        <div className="quote">
          <p>"We need to make technology more inclusive and diverse. It's the future." - Ada Lovelace</p>
        </div>
      </section>

      <section className="articles">
        <article>
          <h3>Le pioniere del software</h3>
          <p>Scopri la storia di Ada Lovelace, Grace Hopper e altre innovatrici che hanno segnato la storia del software.</p>
          <a href="#">Leggi di più</a>
        </article>

        <article>
          <h3>Donne nel Web Development</h3>
          <p>Le sviluppatrici che stanno rivoluzionando il mondo del frontend e backend, dando forma al futuro del web.</p>
          <a href="#">Leggi di più</a>
        </article>

        <article>
          <h3>Intervista a una Software Engineer</h3>
          <p>Un'esclusiva con una donna che lavora nel settore tecnologico, tra sfide e opportunità.</p>
          <a href="#">Leggi di più</a>
        </article>
      </section>
    </div>
  );
}

export default WomenInTech;
