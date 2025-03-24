📰 Clone New York Times – React + Vite
Questa applicazione è una piattaforma dinamica e responsive per esplorare notizie in tempo reale tramite l’integrazione con l’API ufficiale del New York Times.


📖 Descrizione
L'app consente di recuperare, visualizzare e analizzare articoli per sezioni tematiche come World, Technology, Business, Cooking, Arts, The Athletic e molte altre.
Include anche una pagina speciale chiamata Women in Tech, con contenuti editoriali e interazione tramite commenti locali.



🚀 Tecnologie Utilizzate:

⚛️ React.js – Libreria per la creazione di interfacce moderne

⚡ Vite – Bundler ultra veloce per progetti React

🎨 Bootstrap – Framework CSS per un design responsive

🔗 Axios – Per comunicare con le API del New York Times

🌐 React Router DOM – Per la navigazione tra le pagine

📦 Node.js – Per la gestione del progetto e dipendenze

📂 Struttura delle Cartelle
php
Copia
Modifica
src/
├── components/        # Componenti riutilizzabili (Header, Footer, Loader, ecc.)
├── pages/             # Pagine dinamiche e statiche (Home, Science, SectionPage...)
│   └── SectionPage/   # Pagina dinamica per tutte le sezioni NYT
├── services/          # nytAPI.js per le chiamate HTTP
├── assets/            # Immagini, icone e media
├── styles/            # Eventuali stili globali
├── App.jsx            # Componente principale
└── main.jsx           # Entry point dell'app
public/
├── index.html         # Template HTML



📜 Funzionalità Principali:

✅ Recupero degli articoli per sezione tramite API NYT
✅ Navigazione dinamica tramite rotta /section/:sectionName
✅ Gestione dei commenti locali su Women in Tech
✅ Design responsive per desktop e mobile
✅ Menu a tendina con tutte le sezioni integrate
✅ Loader in fase di caricamento articoli
✅ Gestione degli errori in caso di troppi accessi all'API (Errore 429)


🔌 Installazione e Avvio

1️⃣ Clona il progetto:

bash
Copia
Modifica
git clone https://github.com/KateB-creator/progetto-clone-NYT
cd progetto-clone-NYT
2️⃣ Installa le dipendenze:

bash
Copia
Modifica
npm install
3️⃣ Crea un file .env e inserisci la tua API Key NYT:

ini
Copia
Modifica
VITE_NYT_API_KEY=la-tua-api-key
4️⃣ Avvia l'app in modalità sviluppo:

bash
Copia
Modifica
npm run dev
🔗 Vai su http://localhost:5173/ per usare l'app.

🌐 Integrazione con le API del New York Times
La comunicazione avviene tramite il file nytAPI.js.
L'app supporta:

📌 Top Stories – Notizie principali per ogni sezione

🔍 Ricerca articoli (espandibile)

📊 Most Popular (espandibile)

🔗 Link Utili:

🌐 Deploy Netlify: nyt-clone-bk.netlify.app

💻 Codice sorgente GitHub: github.com/KateB-creator/progetto-clone-NYT

📅 Ultimo aggiornamento: 24 marzo 2025
✍️ Creato da Katiuscia Balia

