import React from "react";
import _ from "lodash";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { motion } from "framer-motion";

const Paginate = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <motion.div
      style={{ backgroundColor: "white" }}
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Pagination
        style={{ backgroundColor: "white" }}
        aria-label="Page navigation example"
      >
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
      </Pagination>
    </motion.div>
  );
};

export default Paginate;
