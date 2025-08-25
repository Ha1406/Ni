import { useState } from 'react';
import SearchBar from './SearchBar'; // Assuming SearchBar component is in the same directory

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = data.filter(item =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredData(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;