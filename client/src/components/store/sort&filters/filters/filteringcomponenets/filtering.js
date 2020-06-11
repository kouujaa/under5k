export function SelectedSizeFilterFunction(selectedSize, products) {
  let filter = selectedSize
    ? products.filter(product => product.sizes === selectedSize)
    : products;
  return filter;
}

export function SelectedSellerFilterFunction(selectedSeller, products) {
  let filter = selectedSeller
    ? products.filter(product => product.seller === selectedSeller)
    : products;

  return filter;
}

export function SelectedCategoryFilterFunction(selectedCategory, products) {
  let filter = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return filter;
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

  // if(selected==="XS"||selected==="S"||selected==="M"||selected==="L"||selected==="XL"||selected==="One Size"){
  // }

  if (selected === "omare" || selected === "shalom" || selected === "juliet") {
    filter = SelectedSellerFilterFunction(selected, products);
  }

  return filter;
}
