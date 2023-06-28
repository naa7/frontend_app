import axios from "axios";

import ShopperActionType from "./shoppers.types";

export const fetchAllShoppers = (payload) => {
  console.log("FETCH ALL SHOPPERS ACTION");
  return {
    type: ShopperActionType.FETCH_ALL_SHOPPERS,
    payload: payload,
  };
};

export const fetchAllShoppersThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLSHOPPERSTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/shoppers");
      console.log("FETCHALLSHOPPERSTHUNK COMPLETED")
      console.log(response.data);
      dispatch(fetchAllShoppers(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};