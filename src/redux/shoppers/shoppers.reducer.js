import ShopperActionType from "./shoppers.types";

export const INITIAL_SHOPPER_STATE = {
  allShoppers: [],
};

const shopperReducer = (state = INITIAL_SHOPPER_STATE, { type, payload }) => {
    console.log('SHOPPERREDUCER IS HANDLING FETCH ALL SHOPPERS ACTION')
    console.log("TYPE:", type === ShopperActionType.FETCH_ALL_SHOPPERS);
  switch (type) {
    case ShopperActionType.FETCH_ALL_SHOPPERS:
      return { ...state, allShoppers: payload };

    default:
      return state;
  }
};

export default shopperReducer;