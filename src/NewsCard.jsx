const NewsCard = ({ article }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full flex flex-col group cursor-pointer">
      <img
        src={article.urlToImage || "https://via.placeholder.com/300"}
        alt={article.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4 flex flex-col flex-grow bg-white">
        <h3 className="font-bold text-lg text-black mb-2 transition-colors duration-300 group-hover:text-blue-600">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2 flex-grow transition-colors duration-300 group-hover:text-gray-800">
          {article.description}
        </p>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span className="transition-colors duration-300 group-hover:text-blue-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
          <span className="transition-colors duration-300 group-hover:text-blue-500">
            {article.source?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;