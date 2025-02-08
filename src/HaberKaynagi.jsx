import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HaberKaynagi = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.url) navigate("/");
  }, []);

  return (
    <iframe
      title="haber-kaynagi"
      // Iframe src'sini şu şekilde değiştirin:
      src={`https://api.allorigins.win/raw?url=${encodeURIComponent(
        state?.url
      )}`}
      className="w-full h-[calc(100vh-8rem)] border rounded-lg"
    />
  );
};

export default HaberKaynagi;
