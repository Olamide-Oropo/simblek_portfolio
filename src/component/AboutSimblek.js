import React from "react";
import { Link } from "react-router-dom";
import Img from "../assests/images/wheel-2682229_1920.jpg"

export default function AboutSimblek({hasButton}){
    return(
        <section className="Container">
            <h2 className="titletext textcenter">About Simblek</h2>
            <section className="about-simblek">
                <section className="aboutinfo">
                    <h2>Simblek</h2>
                    <p className="highlighttext">Ex ad occaecat consequat aute enim excepteur proident velit voluptate. Sit voluptate exercitation veniam consectetur. Consequat esse adipisicing quis ipsum mollit anim proident.</p>
                    {
                        hasButton && <Link to="/simblek_project_porfolio/about"><button className="subsimblekbtn">Learn more about simblek</button></Link>
                    }
                </section>
                <figure>
                    <img src={Img} alt="simblek"/>
                </figure>
            </section>
        </section>
    )
}