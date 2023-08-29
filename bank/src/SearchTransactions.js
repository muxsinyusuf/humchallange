import React from "react";

function SearchTransaction({ searchParameter, onTransactionSearch }) {
  function handleTransactionSearch(event) {
    onTransactionSearch(event.target.value);
  }
  return (
    <div className="search">
      <input
        type="text"
        name="searchParameter"
        value={searchParameter}
        placeholder="Search your recent transactions"
        onChange={handleTransactionSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default SearchTransaction;