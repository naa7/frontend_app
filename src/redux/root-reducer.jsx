import { combineReducers } from "redux";
import shoeReducer from "./shoes/shoes.reducer";
import shopperReducer from "./shoppers/shoppers.reducer";

const rootReducer = combineReducers({
  shoes: shoeReducer,
  shoppers: shopperReducer,
});

export default rootReducer;