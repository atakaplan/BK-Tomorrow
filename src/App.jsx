import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Favorites from './Favorites';
import { NewsProvider } from './NewsContext';

function App() {
  return (
    <NewsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:title" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </NewsProvider>
  );
}
export default App;