import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Detail from "./Detail";
import Favorites from "./Favorites";
import { NewsProvider } from "./NewsContext";
import ArticleFrame from "./ArticleFrame";

function App() {
  return (
    <NewsProvider>
      <Router>
        <Navbar />
        <main className="pt-20 min-h-screen min-w-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:title" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Yeni route ekle */}
            <Route path="/article-iframe" element={<ArticleFrame />} />
          </Routes>
        </main>
      </Router>
    </NewsProvider>
  );
}
export default App;
