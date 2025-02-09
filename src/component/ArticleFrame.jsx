import { useLocation, useNavigate } from "react-router-dom";

const ArticleFrame = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.url) {
    navigate("/");
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white shadow-sm p-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Geri
        </button>
      </div>
      <iframe
        title="news-source"
        src={state.url}
        className="flex-grow w-full border-none"
      />
    </div>
  );
};

export default ArticleFrame;
