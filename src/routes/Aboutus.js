import React from "react";
import Header from "../component/Header";
import CalltoAction from "../component/CalltoAction";
import AboutSimblek from "../component/AboutSimblek";
import Footer from "../component/Footer";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";

export default function AboutUs(){
    useActive("About");
    useTitle("Learn more about Simblek")
    return(
        <>
            <Header />
            <main>
                <CalltoAction />
                <AboutSimblek hasButton={false}/>
                <article className="Container">
                    <h3 className="titletext">Our Mission</h3>
                    <p className="articletext">Pariatur laborum eiusmod consequat Lorem ad anim in nostrud laborum nostrud sint. Mollit dolor sint in aute et excepteur amet cillum deserunt non laboris. Esse velit non ea irure laborum dolor. Est aute ullamco veniam aliqua ut elit. Elit magna ex proident consequat consequat incididunt enim mollit cillum non. Reprehenderit laboris occaecat ullamco aliqua dolore occaecat. Dolore velit eiusmod veniam exercitation occaecat consectetur amet enim.</p>
                </article>
                <article className="Container">
                    <h3 className="titletext">How we started</h3>
                    <p className="articletext">Excepteur veniam cillum elit nisi. Qui nisi voluptate do aute exercitation sunt esse reprehenderit aliqua ea enim. Aliqua aliquip consectetur voluptate amet excepteur duis dolor esse consequat quis dolore. Labore enim excepteur officia sit officia proident magna sunt esse. Magna occaecat commodo et esse incididunt do velit enim tempor consequat. Non cillum amet quis excepteur consequat ea esse voluptate aliqua culpa.</p>
                    <p className="articletext">Mollit sunt reprehenderit cupidatat labore labore. Dolore in exercitation sint cupidatat dolore magna tempor. Ea excepteur nostrud cillum adipisicing esse labore ullamco cupidatat culpa dolore. Enim mollit exercitation nulla ea ea nulla aliquip minim aute exercitation sunt mollit duis. Anim sunt cillum esse sunt ut ut ad ad non cupidatat exercitation pariatur minim laboris. Voluptate laborum eiusmod reprehenderit ipsum quis id est anim consequat.</p>
                </article>
                <article className="Container">
                    <h3 className="titletext">Where we want to be</h3>
                    <p className="articletext">Adipisicing eiusmod eu deserunt exercitation cupidatat do qui cupidatat exercitation. Minim cupidatat ad incididunt aliquip nostrud do laborum dolor excepteur. Ullamco laborum cillum fugiat consequat id duis exercitation id eiusmod magna Lorem exercitation ea. Sunt magna occaecat in laborum minim esse id.</p>
                </article>
            </main>
            <Footer />
        </>
    )
}