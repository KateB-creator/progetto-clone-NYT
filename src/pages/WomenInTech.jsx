import { useState } from "react";
import './WomenInTech.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function WomenInTech() {

   // Stati per gestire l'apertura delle sezioni
   const [showDetails, setShowDetails] = useState({ inclusivity: false, career: false, salary: false });

   // Funzione per gestire il toggle della sezione corrispondente
   const toggleDetails = (section) => {
     setShowDetails(prevState => ({ ...prevState, [section]: !prevState[section] }));
   };

  // Recupera i commenti salvati nel Local Storage all'avvio della pagina
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [newComment, setNewComment] = useState("");

  // Funzione per aggiungere un nuovo commento
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments)); // Salva i commenti nel Local Storage
    setNewComment("");
  };

  // Pulire i commenti (opzionale: puoi aggiungere un pulsante per farlo)
  const handleClearComments = () => {
    setComments([]);
    localStorage.removeItem("comments"); // Rimuove i commenti dal Local Storage
  };

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
              <img src="/assets/emancipazione.webp"  className="d-block w-100" alt="Emancipazione" />
              <div className="carousel-caption  d-none d-md-block">
                <p>Insieme, donne e tecnologia, per un mondo più equo.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/emancipazioneDue.webp"  className="d-block w-100" alt="Emancipazione2" />
              <div className="carousel-caption d-none d-md-block">
                <p>Donne che innovano, tecnologie che cambiano il mondo.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/emancipazioneTre.webp"  className="d-block w-100" alt="Emancipazione3" />
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

        <p className="text-center text-1">Nel mondo dello sviluppo web, le donne sono ancora una minoranza. Non per mancanza di talento, passione o competenze, ma per un sistema che, troppo spesso, le esclude o le sottovaluta. 
          Eppure, le donne sviluppatrici stanno cambiando il settore: portano innovazione, creatività e un approccio inclusivo alla tecnologia. Dalle junior developer alle lead engineer, il loro contributo è essenziale.
          E allora perché, nel 2025, dobbiamo ancora dimostrare di meritare il nostro posto? 
          Abbiamo bisogno di più visibilità, di più role model, di più aziende che credano nel valore della diversità. Abbiamo bisogno di comunità solidali, di mentorship e di opportunità concrete.
          Il web deve essere costruito da tutti e per tutti. Per questo, è fondamentale abbattere i pregiudizi e creare spazi in cui le donne possano crescere professionalmente senza ostacoli.</p>
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
        <img src="/assets/web-developer.webp" alt="Pioniere del software" className="article-image" />
          <h3>Donne nel Web Development</h3>
          <p>Le sviluppatrici che stanno rivoluzionando il mondo del frontend e backend, dando forma al futuro del web.</p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Reshma Saujani – L’attivista che ha creato Girls Who Code</strong>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Reshma Saujani è la fondatrice di <strong>Girls Who Code</strong>, un'organizzazione che promuove l’inclusione delle donne nella programmazione e nelle STEM.
                  <h6>💡 Perché è importante?</h6>
                  <p>Ha creato un movimento globale per ridurre il divario di genere nel mondo della tecnologia, ispirando migliaia di ragazze a intraprendere carriere nel coding.</p>
                  <h6>📌 Una curiosità?</h6>
                  <p>Reshma ha scritto il libro "Brave, Not Perfect", in cui incoraggia le donne a superare la paura di sbagliare e a lanciarsi nel mondo della tecnologia.</p>
                  <p>💬 Hai mai provato a programmare? Qual è stata la tua esperienza? Scrivilo nei commenti!</p>
                </div>              
              </div>
            </div>
            <div class="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                 <strong>Barbara Liskov – La donna che ha rivoluzionato la programmazione</strong>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">È una delle più grandi pioniere della programmazione moderna e ha sviluppato concetti fondamentali per il software, tra cui il Liskov Substitution Principle (LSP), che ha influenzato profondamente la programmazione orientata agli oggetti.
                <h6>💡 Perché è importante?</h6>
                <p> Il suo lavoro ha reso la programmazione più efficiente e organizzata, facilitando lo sviluppo di software scalabili e robusti. Senza di lei, i linguaggi come Java, C++ e Python sarebbero molto diversi!</p>
                <h6>📌 Una curiosità?</h6>
                <p>Nel 2008 ha ricevuto il Turing Award, il premio Nobel dell’informatica, per il suo straordinario contributo.</p>
                <p> 💬 Qual è il tuo linguaggio di programmazione preferito? Scrivilo nei commenti!</p>
                </div> 
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>Sviluppatrici Open Source – Le donne che stanno innovando il codice aperto</strong>
                </button>
              </h2>
              <div id="flush-collapseThree"className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  L'Open Source è uno dei settori più importanti nel mondo dello sviluppo software, e molte donne stanno contribuendo con codice, documentazione e innovazione a progetti di grande impatto.
                  <h6>💡 Chi sono alcune delle protagoniste?</h6>
                  <ol>
                    <li><strong>Coraline Ada Ehmke</strong> – Ha creato il Contributor Covenant, uno dei codici di condotta più utilizzati nei progetti Open Source per rendere la tecnologia più inclusiva.</li>
                    <li><strong>Tracy Chou</strong> – Ha contribuito a migliorare la trasparenza sui dati sulla diversità nelle aziende tech e ha lavorato su progetti Open Source per l’uguaglianza di genere.</li>
                    <li><strong>Julia Evans</strong> – Conosciuta per i suoi tutorial tecnici e le guide illustrative su Linux e programmazione backend, aiutando nuovi sviluppatori a entrare nel mondo dell'Open Source.</li>
                  </ol>
                  <h6>📌 Perché è importante?</h6>
                  <p> Il mondo dell’Open Source offre un’opportunità unica per le donne di contribuire e dimostrare il loro talento senza le tradizionali barriere aziendali. Sempre più sviluppatrici stanno avendo un impatto significativo in questo settore.</p>
                  <p>💬 Hai mai contribuito a un progetto Open Source? Se sì, quale? Scrivilo nei commenti!</p>
                </div>             
              </div>
            </div>
          </div>
        </article>

        <article>
        <img src="/assets/grace_hopper.webp" alt="Pioniere del software" className="article-image" />
          <h3>Le pioniere del software</h3>
          <p>Scopri la storia di Ada Lovelace, Grace Hopper e altre innovatrici che hanno segnato la storia del software.</p>
          <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                <strong> Chi era Ada Lovelace?</strong>
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Ada Lovelace è considerata la prima programmatrice della storia. Nel 1800, lavorando con la macchina analitica di Charles Babbage, scrisse il primo algoritmo della storia, anticipando il concetto moderno di programmazione.
                <h6>💡 Perché è importante?</h6>
                <p>Ha gettato le basi della programmazione molto prima che i computer moderni esistessero! Il suo lavoro ha ispirato generazioni di programmatori e programmatori.</p>
                <h6>📌 Una curiosità?</h6>
                <p>Il linguaggio di programmazione "Ada", utilizzato nei sistemi critici come quelli aerospaziali, prende il nome proprio da lei.</p>
                <p>💬 Quale donna nel campo della tecnologia ti ispira di più? Condividilo nei commenti!</p>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
              <strong>Leggi di più su Grace Hopper?</strong>
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Scienziata informatica e ufficiale della Marina degli Stati Uniti, negli anni ’50 sviluppò il primo compilatore della storia, un software che traduceva il linguaggio umano in codice macchina. Senza il suo contributo, la programmazione sarebbe rimasta un’attività complessa e poco accessibile.

                <h6>💡 La sua rivoluzione:</h6>
                <p>Grazie alla sua intuizione, venne sviluppato il linguaggio COBOL, ancora oggi utilizzato in molte infrastrutture critiche. Hopper credeva che i computer dovessero essere facili da usare per tutti, e il suo lavoro ha reso la programmazione molto più intuitiva.</p>

                <h6>📌 Una curiosità?</h6>
                <p>Fu lei a coniare il termine “debugging”, dopo aver trovato un vero insetto (una falena!) incastrato in un computer!</p>

                <p>Grace Hopper ha aperto la strada a un mondo in cui la programmazione è accessibile a più persone. Eppure, le donne sono ancora sottorappresentate nel tech. Come possiamo rendere la tecnologia più inclusiva?</p>

                <p>💬 Scrivi nei commenti il tuo pensiero!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
              <strong>Hedy Lamarr – L’attrice che ha rivoluzionato la tecnologia</strong>
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              Molti la conoscono come una diva del cinema di Hollywood degli anni ‘40, ma pochi sanno che è stata anche un’inventrice visionaria.

              <h6>💡 La sua rivoluzione:</h6>
              <p>Durante la Seconda Guerra Mondiale, Lamarr brevettò insieme a George Antheil un sistema di trasmissione a salti di frequenza, nato per rendere più sicure le comunicazioni militari. Questa invenzione è la base delle moderne tecnologie Wi-Fi, Bluetooth e GPS!</p>
              <h6>📌 Una curiosità?</h6>
              <p>Il suo lavoro fu ignorato per anni perché nessuno credeva che un’attrice potesse avere competenze scientifiche. Solo molto tempo dopo il suo contributo venne riconosciuto, e oggi è celebrata come una pioniera della tecnologia.</p>
              <p>🎬 Dall’arte alla scienza, la storia di Hedy Lamarr ci insegna che il talento non ha confini e che l’innovazione può nascere in qualsiasi contesto.</p>

              <p>📢 Qual è un’invenzione tecnologica che ti ha cambiato la vita? Scrivilo nei commenti!</p>
              </div>
            </div>
          </div>
        </div>
        </article>

        <article>
        <img src="/assets/coder-girl.webp" alt="Pioniere del software" className="article-image" />
          <h3>Intervista a una Software Engineer</h3>
          <p>Un'esclusiva con una donna che lavora nel settore tecnologico, tra sfide e opportunità.</p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                <strong>Il percorso di una donna nella tecnologia: dalle prime esperienze al successo</strong>
                </button>
              </h2>
              <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Molte donne che oggi lavorano nel settore tecnologico hanno dovuto affrontare **sfide e stereotipi**, ma con determinazione e passione sono riuscite a imporsi. In questa intervista, una Software Engineer racconta il suo viaggio.
                <h6>💡 Quali sono state le sfide iniziali?</h6>
                <p>
                  "All'inizio, ho dovuto affrontare il pregiudizio secondo cui le donne non sarebbero portate per la programmazione. Inoltre, trovare mentor o modelli di riferimento femminili nel settore era difficile. Ma la mia determinazione mi ha spinto a continuare!"
                </p>
                <h6>🚀 Quali sono stati i momenti più gratificanti?</h6>
                <p>
                  "Uno dei momenti più belli è stato il giorno in cui ho completato il mio primo grande progetto. Sentire che il mio lavoro aveva un impatto reale è stato incredibile. Inoltre, poter aiutare altre giovani donne a entrare nel settore è una delle mie più grandi soddisfazioni."
                </p>
                <h6>📌 Consigli per chi vuole intraprendere questa carriera?</h6>
                <p>
                  "Non abbiate paura di fallire! Il mondo tech è in continua evoluzione e nessuno sa tutto. Sperimentate, imparate dai vostri errori e cercate comunità di supporto come **Women Who Code** e **Girls Who Code**."
                </p>
                <p>💬 Hai mai pensato di lavorare nel settore tecnologico? Quali sono le tue aspettative o le tue paure? Condividile nei commenti!</p>
              </div>             
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="articleTwo">
        <div className="container">
          <h2>Donne e Lavoro: Inclusione, Sfide e Opportunità</h2>
          <div className="row align-items-start">
            
            {/* Inclusività nel mondo del lavoro */}
            <div className="col-12 col-md-4">
              <h3>Inclusività sul Lavoro</h3>
              <p>
                L'inclusività è fondamentale per creare ambienti lavorativi più equi e produttivi.
              </p>
              <button className="btn btn-primary" onClick={() => toggleDetails("inclusivity")}>
                {showDetails.inclusivity ? "Nascondi" : "Leggi di più"}
              </button>

              {/* Sezione espandibile */}
              {showDetails.inclusivity && (
                <div className="details">
                  <p>
                    Aziende che promuovono la diversità migliorano la creatività e le performance aziendali.
                    Tuttavia, molte donne affrontano ancora barriere culturali e pregiudizi di genere.
                    La promozione dell'inclusione aiuta a creare team più forti e dinamici.
                  </p>
                </div>
              )}
            </div>

            {/* Carriera e Famiglia */}
            <div className="col-12 col-md-4">
              <h3>Carriera e Famiglia</h3>
              <p>
                Il doppio ruolo di madre e lavoratrice è una sfida enorme.
              </p>
              <button className="btn btn-primary" onClick={() => toggleDetails("career")}>
                {showDetails.career ? "Nascondi" : "Scopri di più"}
              </button>

              {showDetails.career && (
                <div className="details">
                  <p>
                    Il 70% delle donne si trova a gestire sia il lavoro che la famiglia, con poche misure di supporto
                    come il lavoro flessibile e il congedo parentale retribuito. Questo può rallentare la crescita 
                    professionale e aumentare il divario di genere.
                  </p>
                </div>
              )}
            </div>

            {/* Aspetti economici e Disparità Salariale */}
            <div className="col-12 col-md-4">
              <h3>Disparità Salariale</h3>
              <p>
                Le donne guadagnano mediamente il 20% in meno rispetto agli uomini.
              </p>
              <button className="btn btn-primary" onClick={() => toggleDetails("salary")}>
                {showDetails.salary ? "Nascondi" : "Approfondisci"}
              </button>

              {showDetails.salary && (
                <div className="details">
                  <p>
                    La lotta per la parità salariale è ancora aperta. Molte professioniste chiedono maggiore trasparenza
                    e politiche di equità nelle retribuzioni aziendali. Alcuni paesi hanno introdotto normative per garantire 
                    stipendi equi, ma c'è ancora molto lavoro da fare.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Sezione Commenti */}
      <section className="comments-section">
        <div className="container">
          <h3>Lascia un Commento</h3>
          <p>Condividi i tuoi pensieri sulle rivoluzioni delle donne nel mondo del lavoro.</p>

          {/* Form per inserire il commento */}
          <div className="comment-form">
            <textarea
              className="form-control"
              placeholder="Scrivi il tuo commento..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button className="btn btn-primary mt-2" onClick={handleAddComment}>Invia</button>
            <button className="btn btn-danger mt-2 ms-2" onClick={handleClearComments}>Cancella Commenti</button>
          </div>

          {/* Lista dei commenti */}
          <div className="comments-list mt-4">
            {comments.length === 0 ? (
              <p className="text-muted">Ancora nessun commento. Sii il primo a condividere la tua opinione!</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="comment-box">
                  <p>{comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>

  );
}

export default WomenInTech;
