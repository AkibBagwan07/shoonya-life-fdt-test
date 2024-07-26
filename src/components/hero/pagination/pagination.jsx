import React from "react";
import styles from "./pagination.module.css"
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className={ styles.NextPrevParent}>
      <button onClick={goToPrevPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
