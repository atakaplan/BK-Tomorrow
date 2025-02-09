import { useNews } from "./NewsContext";

const NewsCard = ({ article, showRemoveButton = false }) => {
  const { removeFavorite } = useNews();

  return (
    <div className="border border-gray-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-3 relative">
      {showRemoveButton && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            removeFavorite(article.title);
          }}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Diğer kart içeriği aynı kalıyor */}
      <img
        src={article.urlToImage || "https://via.placeholder.com/300"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-black">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-2 flex-grow">
          {article.description}
        </p>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span>{article.source?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
