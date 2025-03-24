import axios from 'axios';

const API_KEY = import.meta.env.VITE_NYT_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';

export const getTopStories = async (section = 'home') => {
  try {
    const response = await axios.get(`${BASE_URL}/${section}.json?api-key=${API_KEY}`);
    return response.data.results.map(article => ({
      title: article.title,
      abstract: article.abstract,
      url: article.url,
      multimedia: selectImage(article.multimedia),
    }));
  } catch (error) {
    console.error(`Errore nel recupero degli articoli della sezione ${section}:`, error);
    // Mostra messaggio utente-friendly
    return [{ title: "Errore 429: troppe richieste", abstract: "Riprova tra qualche minuto.", url: "#", multimedia: null }];
  }
};

const selectImage = (multimedia) => {
  if (!multimedia || multimedia.length === 0) return null;
  const largeImage = multimedia.find(media => media.format === "superJumbo");
  return largeImage ? largeImage.url : multimedia[0].url;
};
