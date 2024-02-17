import React from 'react';
import ReactPaginate from 'react-paginate';
import '../Styles/Pagination.css';


const Pagination = ({ pageCount, paginate }) => {
  return (
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={paginate}
      containerClassName={'paginationBttns'}
      previousLinkClassName={'previousBttn'}
      nextLinkClassName={'nextBttn'}
      disabledClassName={'paginationDisabled'}
      activeClassName={'paginationActive'}
    />
  );
};

export default Pagination;
