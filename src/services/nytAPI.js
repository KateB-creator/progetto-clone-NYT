import axios from 'axios';

const API_KEY = '2PZqgCAVQu3cEyYGI5zNApOvj4AS5YSL';  // Sostituisci con la tua chiave
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';

// Funzione generica per ottenere articoli da una sezione specifica
export const getTopStories = async (section = 'home') => {
  try {
    const response = await axios.get(`${BASE_URL}/${section}.json?api-key=${API_KEY}`);
    return response.data.results.map(article => ({
      title: article.title,
      abstract: article.abstract,
      url: article.url,
      multimedia: selectImage(article.multimedia) // Seleziona immagine corretta
    }));
  } catch (error) {
    console.error(`Errore nel recupero degli articoli della sezione ${section}:`, error);
    return [];
  }
};

// Funzione per selezionare l'immagine migliore
const selectImage = (multimedia) => {
  if (!multimedia || multimedia.length === 0) return null;
  
  // Prova a selezionare l'immagine più grande disponibile
  const largeImage = multimedia.find(media => media.format === "superJumbo");
  return largeImage ? largeImage.url : multimedia[0].url; 
};


// Funzione per ottenere gli articoli della sezione "Science"
export const getScienceArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/science.json?api-key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Errore nel recupero degli articoli di Science:', error);
      return [];
    }
  };
  
  // Funzione per ottenere gli articoli della sezione "Technology"
  export const getTechnologyArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/technology.json?api-key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Errore nel recupero degli articoli di Technology:', error);
      return [];
    }
  };



