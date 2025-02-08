import { Link } from "react-router-dom";
import { useNews } from "./NewsContext";
import NewsCard from "./NewsCard";

const Favorites = () => {
  const { favorites } = useNews();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorilerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((article, index) => (
          <Link
            key={index}
            to={`/detail/${encodeURIComponent(article.title)}`}
            state={{ article }}
          >
            <NewsCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
