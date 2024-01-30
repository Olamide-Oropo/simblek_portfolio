import React from "react";
import { Truck,Headset,Fan } from "../assests/icons/Icons";
import Tyre from "../assests/icons/tire-svgrepo-com.svg"
import Testtub from "../assests/icons/test-tube-5-svgrepo-com.svg"
import ServicesComponent from "./partials/ServicesComponent";

export default function OurServices(){
    return(
        <section className="Container">
            <h2 className="titletext">Services we provide</h2>
            <section className="card-container start">
                <ServicesComponent icon={<img src={Tyre} alt={Tyre}/>} title={"Quality Control"} text={"Quality new and used tyres avaliable from a wide range of brands at different tyre sizes."} />
                <ServicesComponent icon={<Truck dimension={"40"} fillColor={"#045bbf"} />} title={"Instant Delivery"} text={"Fast,easy,Affordable delivery and installation appointment anywhere anytime."} />
                <ServicesComponent icon={<Headset dimension={"40"} fillColor={"#045bbf"} />} title={"Customer Service"} text={"Adequate online customer service with 8-6pm call lines to our client."} />
                <ServicesComponent icon={<img src={Testtub} alt={Testtub}/>} title={"Testing and Innovation"} text={"We offer the best testing and Experimental innovtive market breakthroughs which will set us as the pioneers of the future"} />
            </section>
        </section>
    )
}