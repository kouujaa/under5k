import * as action from "../actions/actions";

// export const bugAdded = description => {
//   return {
//     type: action.bugadded,
//     payload: {
//       description
//     }
//   };
// };

// export const bugResolved = id => ({
//   type: action.bugresolved,
//   payload: {
//     id
//   }
// });

export const itemAdded = product => ({
  type: action.itemAdded,
  payload: {
    productCode: product.productCode,
    name: product.name,
    materials: product.materials,
    colors: product.colors,
    style: product.style,
    description: product.description,
    category: product.category,
    caller: product.caller
  }
});

export const itemRemoved = productid => {
  return {
    type: action.itemRemoved,
    payload: { productCode: productid }
  };
};
// export const order = arrayOfProductIds => {
//   return {
//     type: action.order
//   };
// };

// export const style = () => {
//   return {
//     type: action.style
//   };
// };
// export const material = () => {
//   return {
//     type: action.material
//   };
// };
// export const category = () => {
//   return {
//     type: action.category
//   };
// };
