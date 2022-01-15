import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import "./Landing.css";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productError, productLoading, productSuccess } from "../features/products/actionTypes";
import { Link } from "react-router-dom";

export const Landing = () => {
    // const [products, setProducts] = useState({});

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
                    <div>
                        <img className="mainImg" src="https://cdn.shopify.com/s/files/1/0053/2792/files/String.slide1.hs_1280x.jpg?v=1494522734" />
                    </div>
                    <div className="imgText">
                        Winter sale up to 60% Off 
                    </div>

                    <div className="productsBox">
                        {productDetails.map((e) => (
                            <Link to={`/products/${e.id}`}  className="productDet" key={e.id}>
                                <img className="productImg" src={e.img} />
                                <div>{e.title}</div>
                            </Link> 
                        ))}
                    </div>

                    <div className="UKdetails">
                        <div>UK Seller</div>
                        <div>No import duty to UK customers</div>
                    </div>
                    <div>
                        <img className="mainImg" src="https://cdn.shopify.com/s/files/1/0053/2792/files/PandarineCornerCylindricalArmrestLinara443.crop_1024x.jpg?v=1637823591" />
                    </div>
                    <div className="imgText">
                        HAY
                    </div>
                    <div className="UKdetails" style={{backgroundColor: "#dc7c47"}}>
                        <div>Trade Sales</div>
                        <div>For Architects, Designers and Specifiers</div>
                    </div>
                    
                    <Footer />
                </div>
            </div>

        </div>
    )
};