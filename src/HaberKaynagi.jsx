import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HaberKaynagi = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.url) navigate("/");
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar sabit kalıyor */}

      <div className="flex-1 mt-16">
        {" "}
        {/* Navbar yüksekliği kadar boşluk */}
        <div className="container mx-auto p-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-blue-600 hover:text-blue-800"
          >
            ← Geri
          </button>
          <iframe
            title="haber-kaynagi"
            // Iframe src'sini şu şekilde değiştirin:
            src={`https://api.allorigins.win/raw?url=${encodeURIComponent(
              state?.url
            )}`}
            className="w-full h-[calc(100vh-8rem)] border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HaberKaynagi;
