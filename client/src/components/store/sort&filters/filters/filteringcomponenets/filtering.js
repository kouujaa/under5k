export function SelectedSizeFilterFunction(selectedSize, products) {
  if (selectedSize !== "All") {
    let filter = selectedSize
      ? products.filter(product => product.size === selectedSize)
      : products;
    return filter;
  } else {
    return products;
  }
}

export function SelectedSellerFilterFunction(selectedSeller, products) {
  if (selectedSeller !== "all shops") {
    let filter = selectedSeller
      ? products.filter(product => product.seller === selectedSeller)
      : products;

    return filter;
  } else {
    return products;
  }
}

export function SelectedCategoryFilterFunction(selectedCategory, products) {
  if (selectedCategory !== "All") {
    let filter = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;

    return filter;
  } else {
    return products;
  }
}

export function FilterControl(selected, products) {
  var filter = "";

  if (
    selected === "XS" ||
    selected === "S" ||
    selected === "M" ||
    selected === "L" ||
    selected === "XL" ||
    selected === "One Size"
  ) {
    filter = SelectedSizeFilterFunction(selected, products);
  }

  if (selected === "omare" || selected === "shalom" || selected === "juliet") {
    filter = SelectedSellerFilterFunction(selected, products);
  }

  return filter;
}

// export function selectedFilterFunc(filters, filtered) {
//   if (filters === "size") {
//     let sortedfilter = _.orderBy(filtered, ["price"], ["asc"]);
//     filtered = sortedfilter;
//     return filtered;
//   }
//   if (filters === "seller") {
//     let sortedfilter = _.orderBy(filtered, ["dateAdded"], ["asc"]);
//     filtered = sortedfilter;
//     return filtered;
//   }
//   if (filters === "category") {
//     let sortedfilter = _.orderBy(filtered, ["price"], ["desc"]);
//     filtered = sortedfilter;
//     return filtered;
//   } else {
//     return filtered;
//   }
// }
