import React from "react";
import { Button } from "@material-ui/core";
import "./Pagination.css";

const Pagination = ({ totalPages, onPageChange, activePage }) => {
  // totalPages={ total de pagi}
  // onPageClick={callback que recibe el numero de página clickeada}
  // activePage={nro de pagina actual}
  // quantityForPage={cantidad que se muestra por paginado}

  function getPages(totalPages, page, maxLength) {
    if (maxLength < 5) {
      throw new Error("maxLength must be at least 5");
    }

    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    if (totalPages === 1) {
      return [];
    }
    if (totalPages > 1 && totalPages <= maxLength) {
      // no breaks in list
      return range(2, totalPages - 1);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      // no break on left of page
      return range(2, maxLength - sideWidth);
    }
    if (page >= totalPages - sideWidth - 2 - rightWidth) {
      // no break on right of page
      return range(
        totalPages - sideWidth - 2 - rightWidth - leftWidth,
        totalPages - 1
      );
    }
    // Breaks on both sides

    return range(page - 1, page + 3);
  }

  getPages(totalPages, activePage, 6);

  return (
    <div className="Pagination">
      <Button
        disabled={activePage === 0}
        className="Pagination__button"
        onClick={() => {
          onPageChange(activePage - 1);
        }}
      >{`<`}</Button>
      <span className="Pagination__span" key={0}>
        {activePage + 1}&nbsp;
      </span>

      {totalPages > 1 && <span className="Pagination__span">de &nbsp;</span>}
      {totalPages > 1 && <span className="Pagination__span">{totalPages}</span>}

      <Button
        disabled={activePage === totalPages - 1}
        className="Pagination__button"
        onClick={() => {
          onPageChange(activePage + 1);
        }}
      >{`>`}</Button>
    </div>
  );
};

export default Pagination;
