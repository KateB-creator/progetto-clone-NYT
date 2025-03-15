import React, { useEffect, useState } from 'react';
import { getTechnologyArticles } from '../services/nytAPI';
import './Technology.css';


function Technology() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getTechnologyArticles();
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Technology</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            {/* Verifica se esiste un'immagine e usala */}
            {article.multimedia && article.multimedia.length > 0 && (
              <img 
                src={article.multimedia[0].url} 
                alt={article.title} 
                className="article-image"
              />
            )}
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
