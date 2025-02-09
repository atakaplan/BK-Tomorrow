// Detail.js (Güncellenmiş)
import { useLocation, useNavigate } from "react-router-dom";
import { useNews } from "./NewsContext";
import { useState } from "react";

const Detail = () => {
  const {
    state: { article },
  } = useLocation();
  const { favorites, addFavorite, removeFavorite } = useNews();

  const [showCopied, setShowCopied] = useState(false);
  const isFavorite = favorites.some((item) => item.title === article.title);
  const navigate = useNavigate();
  const handleOpenInApp = () => {
    navigate("/haber-kaynagi", { state: { url: article.url } });
  };

  // Paylaşım fonksiyonu
  const handleShare = async () => {
    try {
      await navigator.share({
        title: article.title,
        text: article.description,
        url: article.url,
      });
    } catch (error) {
      // Fallback: Linki panoya kopyala
      navigator.clipboard.writeText(article.url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto mt-5 p-20 pt-20 border-4 border-black rounded-4xl shadow-lg">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-black text-2xl font-bold mb-4">{article.title}</h1>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-700 mb-4 leading-relaxed">{article.content}</p>

        <div className="flex gap-4 mb-6 flex-wrap">
          {/* Paylaş Butonu */}
          <button
            onClick={handleShare}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Paylaş
          </button>
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
            onClick={handleOpenInApp}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            📰 Haber Kaynağını Göster
          </button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
