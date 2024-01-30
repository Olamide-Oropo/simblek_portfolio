import React from "react";
import Quote from "../../assests/icons/quote-svgrepo-com.svg"

export default function Testimonial({img,name,role}){
    return(
        <article className="testimonial">
            <img src={Quote} alt={Quote} />
            <p className="highlighttext">Commodo ad et deserunt ullamco officia cillum. Laboris voluptate consequat amet pariatur exercitation. Sunt amet esse veniam ullamco ipsum pariatur commodo nulla do. Veniam tempor do consequat sit ad cupidatat reprehenderit nisi minim elit tempor culpa.</p>
            <section className="testimonialinfo">
                <img src={img} alt={img}/>
                <section>
                    <strong className="leadtext">{name}</strong>
                    <p className="highlighttext">{role}</p>
                </section>
            </section>
        </article>
    )
}