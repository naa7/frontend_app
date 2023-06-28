import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <div>
                <Link to="/allShoes">All Shoes</Link>
            </div>
            <div>
                <Link to="/allShoppers">All Shoppers</Link>
            </div>
        </>
    )
};

export default Home;