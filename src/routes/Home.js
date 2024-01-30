import React from "react";
import Header from "../component/Header";
import CalltoAction from "../component/CalltoAction";
import PromotionalBanner from "../component/PromotionalBanner";
import TyreRange from "../component/TyreRange";
import AboutSimblek from "../component/AboutSimblek";
import OurServices from "../component/OurServices";
import Testimonals from "../component/Testimonials";
import Footer from "../component/Footer"
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";

export default function Home(){
    useActive("Home");
    useTitle("Simblek | Home of quality Tyres")
    return(
        <>
            <Header />
            <main>
                <CalltoAction />
                <PromotionalBanner />
                <TyreRange />
                <AboutSimblek hasButton={true}/>
                <OurServices />
                <Testimonals />
            </main>
            <Footer />
        </>
    )
}