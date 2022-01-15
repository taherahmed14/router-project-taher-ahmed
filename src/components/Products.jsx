import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import "./Landing.css";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productError, productLoading, productSuccess } from "../features/products/actionTypes";
import { Link } from "react-router-dom";

export const Products = () => {
    const { loading, productDetails, error } = useSelector((state) => ({
        loading: state.loading,
        productDetails: state.productDetails,
        error: state.error
    }),
    function(prev, cur){
        if(prev.loading === cur.loading &&
            prev.status === cur.status &&
            prev.productDetails === cur.productDetails){
                return true;
        }
        return false;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        try{
            dispatch(productLoading());
            const data = await fetch("http://localhost:3001/products")
            .then((d) => d.json());
            dispatch(productSuccess(data));
        }
        catch(err){
            dispatch(productError(err));
        };
    }

    return (
        <div className="container">

            <div className="navbarCont">
                <Navbar />
            </div>
            
            <div className="mainCont">
                <Banner />
                <div>

                    <div className="productsBox">
                        {productDetails.map((e) => (
                            <Link to={`/products/${e.id}`} className="productDet" key={e.id}>
                                <img className="productImg" src={e.img} />
                                <div className="productTitle">{e.title}</div>
                            </Link> 
                        ))}
                    </div>

                    <div className="productsBox">
                        {productDetails.map((e) => (
                            <Link to={`/products/${e.id}`} className="productDet" key={e.id}>
                                <img className="productImg" src={e.img} />
                                <div>{e.title}</div>
                            </Link> 
                        ))}
                    </div>

                    <div className="productsBox">
                        {productDetails.map((e) => (
                            <Link to={`/products/${e.id}`} className="productDet" key={e.id}>
                                <img className="productImg" src={e.img} />
                                <div>{e.title}</div>
                            </Link> 
                        ))}
                    </div>

                    
                    <Footer />
                </div>
            </div>

        </div>
    )
};