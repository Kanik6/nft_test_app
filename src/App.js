import "./App.css";

import NftList from "./containers/NftList";

import {Routes, Route } from "react-router-dom";
import NftDetails from "./containers/NftDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NftList />} />
        <Route path="/nft/:id" element={<NftDetails />} />
      </Routes>
    </div>
  );
}

export default App;
