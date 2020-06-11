import _ from "lodash";

export function selectedSortFunc(ssort, filtered) {
  if (ssort === "priceLowToHigh") {
    let sortedfilter = _.orderBy(filtered, ["price"], ["asc"]);
    filtered = sortedfilter;
    return filtered;
  }
  if (ssort === "NewArrivals") {
    let sortedfilter = _.orderBy(filtered, ["dateAdded"], ["asc"]);
    filtered = sortedfilter;
    return filtered;
  }
  if (ssort === "priceHighToLow") {
    let sortedfilter = _.orderBy(filtered, ["price"], ["desc"]);
    filtered = sortedfilter;
    return filtered;
  } else {
    return filtered;
  }
}
