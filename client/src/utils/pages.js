import _ from "lodash";

export function pages(productsArray, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const sliced = _.slice(productsArray, startIndex);
  const products = _.take(sliced, pageSize);
  return products;
}
