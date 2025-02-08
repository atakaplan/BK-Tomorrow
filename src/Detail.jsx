import { useLocation, useNavigate } from 'react-router-dom';
import { useNews } from './NewsContext';

const Detail = () => {
  const { state: { article } } = useLocation();
  const { favorites, addFavorite, removeFavorite } = useNews();
  const navigate = useNavigate();

  const isFavorite = favorites.some(item => item.title === article.title);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4">← Geri</button>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{article.content}</p>
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => isFavorite ? removeFavorite(article.title) : addFavorite(article)}
            className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white`}
          >
            {isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
          </button>
          <button
            onClick={() => navigator.share({ url: article.url })}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Paylaş
          </button>
        </div>
        <iframe
          title="haber-icerik"
          src={article.url}
          className="w-full h-96 border rounded"
        />
      </div>
    </div>
  );
};
export default Detail;