import { useEffect, useState } from 'react';
import { getTopStories } from '../services/nytAPI';
import './Home.css';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getTopStories();
      console.log("Articoli ricevuti:", data.length); // Debug: Verifica quanti articoli arrivano
      setArticles(data.slice(0, 10)); // Mostra fino a 10 articoli
    };
    fetchArticles();
  }, []);

  return (
    <div className="container">
      {/* Sezione Hero: Primo articolo in evidenza */}
      <div className="row">
        <div className="col-md-8">
          {articles.length > 0 && (
            <div className="article-card article-hero">
              <img src={articles[0].multimedia} alt={articles[0].title} className="img-fluid" />
              <h2>{articles[0].title}</h2>
              <p>{articles[0].abstract}</p>
              <a href={articles[0].url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
            </div>
          )}
        </div>

        <div className="col-md-4">
          {articles.length > 1 && (
            <div className="article-card">
              <img src={articles[1].multimedia} alt={articles[1].title} className="img-fluid" />
              <h2>{articles[1].title}</h2>
              <p>{articles[1].abstract}</p>
              <a href={articles[1].url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
            </div>
          )}
        </div>
      </div>

      {/* Sezione con più articoli */}
      <div className="row">
        {articles.slice(2, 15).map((article, index) => (
          <div key={index} className="col-md-4">
            <div className="article-card">
              <img src={article.multimedia} alt={article.title} className="img-fluid" />
              <h2>{article.title}</h2>
              <p>{article.abstract}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
