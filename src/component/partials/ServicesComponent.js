import React from "react";

export default function ServicesComponent({icon,title,text}){
    return(
        <article className="services-article">
            {icon}
            <h2 className="leadtext">{title}</h2>
            <p className="articletext">{text}</p>
        </article>
    )
}