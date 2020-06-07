import React from "react";
import _ from "lodash";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginate = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        {/* <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem> */}
        {pages.map(page => (
          <PaginationItem
            className={page === currentPage ? "active" : ""}
            key={page}
          >
            <PaginationLink
              onClick={() => {
                onPageChange(page);
              }}
              href="#"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem> */}
      </Pagination>
    </div>
  );
};

export default Paginate;
