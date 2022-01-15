import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Landing.css";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import "./ProductDetails.css"

export const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        try{
            const data = await fetch(`http://localhost:3001/products?id=${id}`)
            .then((d) => d.json());
            setProduct(data);
        }
        catch(err){
            console.log(err);
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
                    <div className="productsDetBox">
                        {product.map((e) => (
                            <div className="productDets" key={e.id}>
                                <img className="productDetImg" src={e.img} />
                                <div className="productDetailsBox">
                                    <div>{e.title}</div>
                                    <div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                                        Aldus PageMaker including versions of Lorem Ipsum.
                            
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                                        Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                    <div>Price: {e.price}</div>
                                    <button>Add to Cart</button>
                                </div>
                            </div> 
                        ))}
                    </div>

                    <Footer />
                </div>
            </div>
            
        </div>
    )
};