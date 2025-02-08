import { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (article) => {
    setFavorites([...favorites, article]);
  };

  const removeFavorite = (title) => {
    setFavorites(favorites.filter(item => item.title !== title));
  };

  return (
    <NewsContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);