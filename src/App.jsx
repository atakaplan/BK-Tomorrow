import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Detail from "./Detail";
import Favorites from "./Favorites";
import { NewsProvider } from "./NewsContext";

function App() {
  return (
    <NewsProvider>
      <Router>
        <Navbar />
        {/* Ana içerik alanına navbar yüksekliği kadar padding */}
        <main className="pt-20 min-h-screen min-w-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:title" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </Router>
    </NewsProvider>
  );
}
export default App;
