import React from "react";
import _ from "lodash";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginate = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        {pages.map(page => (
          <PaginationItem
            className={page === currentPage ? "active" : ""}
            key={page}
          >
            <PaginationLink
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};

export default Paginate;
