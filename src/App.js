import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import data from "./db.json"

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search..." data={data} />
    </div>
  )
}

export default App;