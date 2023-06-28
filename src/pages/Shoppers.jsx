import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoppersThunk } from "../redux/shoppers/shoppers.actions";
import ListItems from "../components/ListItems";
import { Link } from "react-router-dom";
// List all shoppers

const Shoppers = () => {
  const allShoppers = useSelector((state) => state.shoppers.allShoppers);
  console.log("ALLSHOPPERS:", allShoppers);
  const dispatch = useDispatch();
  const fetchAllShoppers = () => {
    console.log('RUNNING DISPATCH FROM FETCHALLSHOPPERS')
    return dispatch(fetchAllShoppersThunk());
  };

  useEffect(() => {
    console.log('FETCH ALL SHOPPERS FIRING IN USEEFFECT')
    fetchAllShoppers();
  }, []);

  return (
    <>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <h1>Shoppers Page</h1>
            <ListItems list={allShoppers} />
        </div>
    </>
  );
};

export default Shoppers;