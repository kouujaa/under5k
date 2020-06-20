import React, { Component } from "react";
import SizeListGroup from "./SizeListgroup";
import SellerListGroup from "./SellerListgroup";
import CategoryListGroup from "./CategoryListgroup";

class Filters extends Component {
  state = {
    sellers: ["omare", "shalom", "juliet"],
    sizes: ["XS", "S", "M", "L", "XL", "One Size", "All"],
    categories: [
      "Hoodies",
      "Dresses",
      "Blouses",
      "SweatShirts",
      "Suits",
      "Jeans",
      "Skirts",
      "Pants",
      "Capris",
      "Swimsuit",
      "Shirts",
      "Sets",
      "Sweaters",
      "Jackets",
      "Bodysuits",
      "Jumpsuits",
      "Tees",
      "Coats",
      "Bottoms",
      "Tops",
      "Playsuits",
      "Jumpsuits",
      "Lingerie"
    ]
  };

  render() {
    const {
      handleSizeFilter,
      handleCategoryFilter,
      handleSellerFilter,
      selectedSize,
      selectedCategory,
      selectedSeller,
      currentCategory,
      currentSeller,
      currentSize
    } = this.props;
    return (
      <div className="sandf" style={{ backgroundColor: "white" }}>
        <SizeListGroup
          handleSizeFilter={handleSizeFilter}
          sizes={this.state.sizes}
          selectedSize={selectedSize}
          currentSize={currentSize}
        />
        <CategoryListGroup
          handleCategoryFilter={handleCategoryFilter}
          categories={this.state.categories}
          selectedCategory={selectedCategory}
          currentCategory={currentCategory}
        />
        <SellerListGroup
          handleSellerFilter={handleSellerFilter}
          sellers={this.state.sellers}
          selectedSeller={selectedSeller}
          currentSeller={currentSeller}
        />
      </div>
    );
  }
}

export default Filters;
