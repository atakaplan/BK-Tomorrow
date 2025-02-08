// Detail.js (Güncellenmiş)
import { useLocation } from "react-router-dom";
import { useNews } from "./NewsContext";

const Detail = () => {
  const {
    state: { article },
  } = useLocation();
  const { favorites, addFavorite, removeFavorite } = useNews();

  const isFavorite = favorites.some((item) => item.title === article.title);

  const handleOpenSource = () => {
    // Yeni sekmede aç
    window.open(article.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-700 mb-4 leading-relaxed">{article.content}</p>

        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={() =>
              isFavorite ? removeFavorite(article.title) : addFavorite(article)
            }
            className={`px-4 py-2 rounded-lg transition-colors ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isFavorite ? "★ Favorilerden Çıkar" : "☆ Favorilere Ekle"}
          </button>

          <button
            onClick={handleOpenSource}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ↗️ Haber Kaynağında Aç
          </button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
