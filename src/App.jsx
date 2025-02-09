import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./component/Favorites";
import { NewsProvider } from "./context/NewsContext";
import ArticleFrame from "./component/ArticleFrame";
import NewsSource from "./pages/NewsSource";

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
            <Route path="/article-iframe" element={<ArticleFrame />} />
            <Route path="/news-source" element={<NewsSource />} />
          </Routes>
        </main>
      </Router>
    </NewsProvider>
  );
}
export default App;
