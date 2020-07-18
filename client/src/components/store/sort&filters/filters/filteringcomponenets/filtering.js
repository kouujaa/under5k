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

export function AllFilterFunction(cat, sell, size, data) {
  let filter = data;

  if (sell !== "All") {
    filter = filter.filter(datum => datum.seller === sell);
  }

  if (cat !== "All") {
    filter = filter.filter(datum => datum.category === cat);
  }

  if (size !== "All") {
    filter = filter.filter(datum => datum.size === size);
  }

  if (sell === "All" && cat === "All" && size === "All") {
    return filter;
  } else {
    return filter;
  }
}

export function StoreFilterFunction(cat, size, data) {
  let filter = data;

  if (cat !== "All") {
    filter = filter.filter(datum => datum.category === cat);
  }

  if (size !== "All") {
    filter = filter.filter(datum => datum.size === size);
  }

  if (cat === "All" && size === "All") {
    return filter;
  } else {
    return filter;
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
