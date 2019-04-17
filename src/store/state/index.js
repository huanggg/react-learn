import { createStore } from "redux";
import reducer from "../reducer/index.js";

const initValue = {
  userInfo: {
    name: "张三"
  },
  conut:1
};
// const ADD_TO_CART = "ADD_TO_CART";
// const reducer = function(state, action) {
//   switch (action.type) {
//     case ADD_TO_CART:     
//       console.log(state.userInfo.name)
//       return {
//         userInfo: {
//           name: action.userInfo
//         },
//         conut:2
//       };
//     default:
//       return state;
//   }
// };

export default createStore(reducer, initValue);
