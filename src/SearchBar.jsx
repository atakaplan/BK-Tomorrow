import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Haber ara..."
        className="w-full p-2 border rounded"
      />
    </form>
  );
};
export default SearchBar;