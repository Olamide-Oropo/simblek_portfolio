import React from "react";
import Img from "../assests/images/winter-tires-4664205_1920.jpg";
import Img2 from "../assests/images/car-888913_1920.jpg";
import Img3 from "../assests/images/tyre-1714669_1920.jpg";
import Img4 from "../assests/images/motorbike-7249769_1280.jpg"
import Img5 from "../assests/images/truck-g14a6be5a7_1920.jpg"
import Img6 from "../assests/images/wheel-3697449_1920.jpg"
import ActiveLinkContext from "../contexts/ActiveLinkContent";
import TyreRangeComponent from "./partials/TyreRangeComponent"
import "../styles/tyrerange.css"

export default function TyreRange(){
    const [active,setActive] = React.useContext(ActiveLinkContext);
    const isProductspPage = active === "Products"
    return(
        <section className="Container">
            <h2 className={`titletext ${isProductspPage && "textcenter"}`}>Our Tyre Range</h2>
            <section className={`card-container ${isProductspPage? "center":"start"}`}>
                <TyreRangeComponent img={Img} text={"Eu nulla labore incididunt consequat Non est exercitation magna adipisicing cillum ea non."} title={"Summer"}/>
                <TyreRangeComponent img={Img2} text={"Id labore ad proident amet cupidatat deserunt anim et sint do esse voluptate id nulla pariatur."} title={"Winter"}/>
                <TyreRangeComponent img={Img3} text={"Ea exercitation velit sint magna sunt nulla eu dolore culpa ad quis commodo sunt cillum ea quis exercitation."} title={"All-season"}/>
                {
                    isProductspPage && (
                        <>
                            <TyreRangeComponent img={Img4} text={"Tempor est dolore est cillum nulla. Enim mollit dolore laborum est ullamco ut do. Laborum est sunt ipsum."} title={"Motorcycle"}/>
                            <TyreRangeComponent img={Img5} text={"Irure elit nulla labore non cillum eu labore. Ut nulla culpa enim laboris non do deserunt quis. Quis enim ad dolore nostrud."} title={"Truck"}/>
                            <TyreRangeComponent img={Img6} text={"Id fugiat proident dolor ut ut magna tempor. Lorem culpa aute occaecat ex esse ex do irure minim culpa adipisicing enim."} title={"Speciality"}/>
                        </>
                    )
                }
            </section>
        </section>
    )
}