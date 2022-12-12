import React from "react";

function Coins({ data, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="main-coins">
      {data.map((data, idx) => (
        <div
          style={{
            width: "20rem",
            border: "1px solid black",
            padding: "2px",
          }}
          key={idx}
        >
          <p>{data.rank}</p>
          <p>{data.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Coins;
