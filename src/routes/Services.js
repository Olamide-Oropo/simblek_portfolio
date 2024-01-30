import React from "react";
import Header from "../component/Header";
import CalltoAction from "../component/CalltoAction";
import Img from "../assests/images/white-male-1871411_1920.jpg"
import OurServices from "../component/OurServices";
import ServicesTOC from "../component/partials/ServicesTOC";
import Footer from "../component/Footer";
import useActive from "../hooks/useActive";
import "../styles/servicepage.css";
import useTitle from "../hooks/useTitle";

export default function Services(){
    useActive("Services");
    useTitle("View the various services simblek has to offer you")
    return(
        <>
            <Header />
            <main>
                <CalltoAction />
                <figure className="center service-man">
                    <img src={Img} alt={"Services white male"}/>
                </figure>
                <OurServices />
                <ServicesTOC />
            </main>
            <Footer />
        </>
    )
}