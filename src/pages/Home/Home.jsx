import { useEffect, useState } from 'react'; 
import { getTopStories } from '../../services/nytAPI';
import './Home.css';
import Loader from '../../components/Loader/Loader'; 

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getTopStories();
      console.log("Articoli ricevuti:", data.length);
      setArticles(data.slice(0, 12));
      setLoading(false); 
    };
    fetchArticles();
  }, []);

  if (loading) return <Loader />; 

  return (
    <div className="container text-center">
      {/* Sezione Hero */}
      <div className="row">
        <div className="col-md-7">
          {articles?.[0] && (
            <div className="article-card article-hero">
              <img src={articles[0].multimedia} alt={articles[0].title} className="img-fluid" />
              <h2>{articles[0].title}</h2>
              <p>{articles[0].abstract}</p>
              <a href={articles[0].url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
            </div>
          )}
        </div>

        <div className="col-12 col-md-5">
          {articles?.[1] && (
            <div className="article-card">
              <img src={articles[1].multimedia} alt={articles[1].title} className="img-fluid" />
              <h2>{articles[1].title}</h2>
              <p>{articles[1].abstract}</p>
              <a href={articles[1].url} target="_blank" rel="noopener noreferrer">Leggi di più</a>
            </div>
          )}
        </div>
      </div>

      {/* Altri articoli */}
      <div className="row">
        {articles.slice(2).map((article, index) => (
          <div key={index} className="col-12 col-md-6">
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
