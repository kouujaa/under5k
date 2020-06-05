import * as acttype from "../actions/actions";

// let counter = 0;

// const myreducer = (state = [], action) => {
//   if (action.type === acttype.bugadded) {
//     return [
//       ...state,
//       {
//         description: action.payload.description,
//         resolved: false,
//         id: ++counter
//       }
//     ];
//   } else if (action.type === acttype.bugremoved) {
//     return state.filter(bug => bug.id !== action.payload.productCode);
//   } else if (action.type === acttype.bugresolved) {
//     return state.map(bug =>
//       bug.id === action.payload.productCode ? { ...bug, resolved: true } : bug
//     );
//   }
//   return state;
// };

const shopReducer = (state = [], action) => {
  if (action.type === acttype.itemAdded) {
    return [
      ...state,
      {
        productCode: action.payload.productCode,
        name: action.payload.name,
        materials: action.payload.materials,
        colors: action.payload.colors,
        style: action.payload.style,
        description: action.payload.description,
        category: action.payload.category
      }
    ];

    //
  } else if (action.type === acttype.itemRemoved) {
    return state.filter(
      item => item.productCode !== action.payload.productCode
    );
  }
  // else if (action.type === acttype.order ){

  // }
  // else if (action.type === acttype.byCategory ){

  // }
  // else if (action.type === acttype.byColor ){

  // }
  // else if (action.type === acttype.byMaterial ){

  // }
  // else if (action.type === acttype.byStyle ){

  // }

  return state;
};

// export default myreducer;
export default shopReducer;
