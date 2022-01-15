import "./Banner.css";

export const Banner = () => {
    return (
        <div className="bannerBox">
            <div className="heading">
                Winter Sale-On Now
            </div>

            <div className="iconBox">
                <img src="phone-call.png" className="icons" />
                <img src="user.png" className="icons" />
                <img src="shopping-cart.png" className="icons" />
            </div>
        </div>
    )
}