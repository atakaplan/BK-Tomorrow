import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NewsSource = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.url) navigate("/");
  }, []);

  return (
    <iframe
      title="news-source"
      src={`https://api.allorigins.win/raw?url=${encodeURIComponent(
        state?.url
      )}`}
      className="w-full h-[calc(100vh-8rem)] border rounded-lg"
    />
  );
};

export default NewsSource;
