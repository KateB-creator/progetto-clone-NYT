import './WomenInTech.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function WomenInTech() {
  return (
    <div className="women-tech-container">
      <h1>Women in Tech</h1>
      <header className="hero">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/emancipazione.png"  className="d-block w-100" alt="Emancipazione" />
              <div className="carousel-caption  d-none d-md-block">
                <p>Insieme, donne e tecnologia, per un mondo più equo.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/emancipazioneDue.png"  className="d-block w-100" alt="Emancipazione2" />
              <div className="carousel-caption d-none d-md-block">
                <p>Donne che innovano, tecnologie che cambiano il mondo.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/emancipazioneTre.png"  className="d-block w-100" alt="Emancipazione3" />
              <div className="carousel-caption d-none d-md-block">
                <p>Il futuro è scritto in codice... e al femminile.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
        <img src="/assets/grace_hopper.jpg" alt="Pioniere del software" className="article-image" />
          <h3>Le pioniere del software</h3>
          <p>Scopri la storia di Ada Lovelace, Grace Hopper e altre innovatrici che hanno segnato la storia del software.</p>
          <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                Leggi di più
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Questo è il primo accordion.</strong> Il contenuto sarà visibile solo quando l'utente clicca sul bottone.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Leggi di più
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Questo è il secondo accordion.</strong> Anche questo sarà chiuso di default.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                Leggi di più
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Questo è il terzo accordion.</strong> Stessa logica di comportamento.
              </div>
            </div>
          </div>
        </div>
        </article>

        <article>
          <h3>Donne nel Web Development</h3>
          <p>Le sviluppatrici che stanno rivoluzionando il mondo del frontend e backend, dando forma al futuro del web.</p>
          <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                  Leggi di più
                </button>
              </h2>
              <div id="flush-collapse4" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </article>

        <article>
          <h3>Intervista a una Software Engineer</h3>
          <p>Un'esclusiva con una donna che lavora nel settore tecnologico, tra sfide e opportunità.</p>
          <a href="#">Leggi di più</a>
        </article>
      </section>

      <section clssName="articleTwo">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
            One of three columns
            </div>
            <div className="col">
            One of three columns
            </div>
            <div className="col">
            One of three columns
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default WomenInTech;
