import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsCard from "./NewsCard";
import SearchBar from "./SearchBar";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("random news");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Home.js içinde:
        const { data } = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=a0c3d50dc320406c87c6732b38f348e4`
        );
        setArticles((prev) => [...prev, ...data.articles]);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchNews();
  }, [query, page]);

  return (
    <div className="container mx-auto p-4 pt-15">
      {" "}
      {/* Ortalama ve padding eklendi */}
      <SearchBar
        onSearch={(term) => {
          setQuery(term);
          setPage(1);
          setArticles([]);
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={`/detail/${encodeURIComponent(article.title)}`}
            state={{ article }}
          >
            <NewsCard article={article} />
          </Link>
        ))}
      </div>
      {loading && <div className="text-center">Yükleniyor...</div>}
      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded mx-auto block mt-4"
      >
        Daha Fazla Haber Yükle
      </button>
    </div>
  );
};
export default Home;
