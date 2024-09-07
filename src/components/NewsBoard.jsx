import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d8cfb9142d4437585aad12a240f4924`;
    
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch articles: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setArticles(data.articles || []))  // Handle cases where data.articles is undefined
      .catch(err => setError(err.message));  // Set error message if the fetch fails
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger fs-3 mt-2">News</span>
      </h2>

      {error ? (
        <div className="alert alert-danger">Error: {error}</div>
      ) : articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available</p>
      )}
    </div>
  );
};

export default NewsBoard;
