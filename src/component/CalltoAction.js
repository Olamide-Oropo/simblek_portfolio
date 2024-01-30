import React from "react";
import { Link } from "react-router-dom";
import "../styles/calltoaction.css"

export default function CalltoAction(){
    return(
        <section className="calltoaction">
            <article>
                <h2>Simblek</h2>
                <h6>Tyres &amp; Wheels</h6>
                <p>Esse elit deserunt sit nulla officia duis exercitation. Officia cupidatat proident exercitation qui labore proident duis Lorem sunt.</p>
                <Link to="/simblek_project_porfolio/products"><button className="subsimblekbtn">View our products</button></Link>
            </article>
        </section>
    )
}