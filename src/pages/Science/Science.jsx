import React, { useEffect, useState } from 'react';
import { getTopStories } from '../../services/nytAPI';
import Loader from '../../components/Loader/Loader';
import styles from './Science.module.css';

function Science() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getTopStories('science');
      setArticles(data.slice(0, 12));
      setLoading(false);
    };
    fetchArticles();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sezione: Scienza</h1>
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
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Leggi di più
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Science;
