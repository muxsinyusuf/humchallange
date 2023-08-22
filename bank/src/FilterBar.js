import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = () => {
    onFilter(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default FilterBar;
