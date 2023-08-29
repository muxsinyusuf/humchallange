import React from "react";
import "./App.css";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div className="body">
      <div className="header">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      <TransactionList />
    </div>
  );
}

export default App;