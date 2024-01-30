import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assests/icons/Icons";

export default function TyreRangeComponents({img,title,text}){
    return(
        <article className="tyre-range-article">
            <img src={img} alt={img} />
            <h5 className="leadtext">{title} tyres</h5>
            <p>{text}</p>
            <Link to="/simblek_project_porfolio/about">
                Learn more
                <ArrowIcon dimension={"18"} fillColor={"#045bbf"}/>
            </Link>
        </article>
    )
}