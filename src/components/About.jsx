import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import "./Landing.css";
import { Footer } from "./Footer";

export const About = () => {
    return (
        <div className="container">
            <div className="navbarCont">
                <Navbar />
            </div>

            <div className="mainCont">
                <Banner />
                <div className="aboutDet">
                    <div className="aboutHead">
                        About
                    </div>
                    <div className="aboutContent">
                        haus® offers a carefully considered selection of the very best in contemporary furniture, lighting and homeware both online and from our East London shop in Victoria Park.
                        Established in 2007, we supply discerning private and trade customers.
                        Products are sourced from leading European design brands and internationally renowned designers, as well as lesser known pieces from smaller producers and independent designers.
                        All the products we sell are authentic and original editions from the authorised manufacturer.
                    </div>

                    <div className="aboutHead">
                        Our Shop
                    </div>
                    <div className="aboutContent">
                        Our shop displays selected examples from the extensive ranges we offer including furniture, lighting, gifts and accessories. 
                        You will receive friendly and expert advice to help you choose the right products and guide you through the process of ordering, whether it is a single order or a larger project. We keep samples and fabrics so that you can take your time choosing exactly the finishes you want.
                    </div>

                    <div className="aboutHead">
                        People
                    </div>
                    <div className="aboutContent">
                        The business is headed by Andrew and Jane Tye. Andrew was originally a furniture designer. Jane trained as a sculptor.
                        "We have selected pieces which we believe are useful, aesthetically resolved, well made and fair value. We are looking for designs that are innovative, inspiring and that just 'work'.
                        Our goal is to choose carefully the things we live with and to keep them for a long time. We would rather have a few 'good' things. This seems to make sense both economically and ecologically. We hope you agree with this simple principle, and like what we offer."
                    </div>    
                </div>

                <div className="UKdetails" style={{backgroundColor: "#dc7c47"}}>
                        <div>Trade Sales</div>
                        <div>For Architects, Designers and Specifiers</div>
                </div>
                    
                <Footer />

            </div>
        </div>
    )
}