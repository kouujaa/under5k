import React, { Component } from "react";
import SizeListGroup from "./SizeListgroup";
import SellerListGroup from "./SellerListgroup";
import CategoryListGroup from "./CategoryListgroup";

class Filters extends Component {
  state = {
    sellers: ["all shops", "omare", "shalom", "juliet"],
    sizes: ["All", "XS", "S", "M", "L", "XL", "One Size"],
    categories: [
      "All",
      "Blouses",
      "Bodysuits",
      "Bottoms",
      "Capris",
      "Coats",
      "Dresses",
      "Hoodies",
      "Jackets",
      "Jeans",
      "Jeggings",
      "Jumpsuits",
      "Lingerie",
      "Pants",
      "Playsuits",
      "Sweaters",
      "Sets",
      "Shirts",
      "Skirts",
      "Suits",
      "SweatShirts",
      "Swimsuit",
      "Tees",
      "Tops"
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
