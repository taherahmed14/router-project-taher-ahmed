import { Link } from "react-router-dom"
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbarBox">
            <Link to={"/"} className="productName">haus</Link>
            <div className="boxOne">
                <Link to={"/products"} className="details" >New Arrivals</Link>
                <Link to={"/products"} className="details">Furniture</Link>
                <Link to={"/products"} className="details">Lightings</Link>
                <Link to={"/products"} className="details">Accesories</Link>
            </div>

            <div className="boxOne">
                <Link to={"/about"} className="details">News</Link>
                <Link to={"/about"} className="details">Contact</Link>
                <Link to={"/about"} className="details">About</Link>
                <Link to={"/about"} className="details">Delivery</Link>
            </div>
            
        </div>
    )
}