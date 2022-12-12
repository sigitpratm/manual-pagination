import React from "react";

function Pagination({ postPerPage, totalPost, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (num) => {
    paginate(num);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, idx) => (
          <li key={idx} className="list">
            <button
              className={`page-link ${currentPage === number ? "active" : ""}`}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
