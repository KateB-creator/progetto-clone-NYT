import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopStories } from '../../services/nytAPI';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getTopStories(category);
      setArticles(data);
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Categoria: {category}</h2>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
          {article.multimedia && <img src={article.multimedia} alt="cover" />}
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
