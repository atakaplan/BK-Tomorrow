const NewsCard = ({ article }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={article.urlToImage || 'https://via.placeholder.com/300'} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{article.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{article.description}</p>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span>{article.source?.name}</span>
          </div>
        </div>
      </div>
    );
  };
  export default NewsCard;