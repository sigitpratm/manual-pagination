import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Pagination from "./components/Pagination";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const baseUrl = `http://localhost:3100/coins`;

  const fetchCoin = async () => {
    setLoading(true);
    const res = await axios.get(baseUrl);
    setCoins(res.data);
    setLoading(false);
  };

  const idxLastPost = currentPage * postPerPage;
  const idxFirstPost = idxLastPost - postPerPage;
  const currentPost = coins.slice(idxFirstPost, idxLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="App">
      <h1>My Data</h1>

      <div>
        <Coins data={currentPost} loading={loading} />
        <Pagination
          postPerPage={postPerPage}
          totalPost={coins.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
