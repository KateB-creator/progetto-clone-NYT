import React, { useEffect, useState } from 'react';
import { getTopStories } from '../../services/nytAPI';
import styles from './Technology.module.css';
import Loader from '../../components/Loader/Loader';

function Technology() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getTopStories('technology'); // ✅ sezione corretta
      console.log("Articoli ricevuti:", data.length);
      setArticles(data.slice(0, 12));
      setLoading(false); 
    };
    fetchArticles();
  }, []);

  if (loading) return <Loader />; 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sezione: Tecnologia</h1>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            {article?.multimedia && (
              <img 
                src={article.multimedia} 
                alt={article.title} 
                className={styles.image}
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
