import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopStories } from '../../services/nytAPI';
import Loader from '../../components/Loader/Loader';
import styles from './SectionPage.module.css';

const SectionPage = () => {
  const { sectionName } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getTopStories(sectionName);
      setArticles(data.slice(0, 12));
      setLoading(false);
    };

    fetchArticles();
  }, [sectionName]);

  if (loading) return <Loader />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sezione: {sectionName.replace('-', ' ')}</h1>
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
};

export default SectionPage;
