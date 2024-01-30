import React from "react";
import Img1 from "../assests/images/male-7275449_1920.jpg"
import Img2 from "../assests/images/man-839604_1920.jpg"
import Img3 from "../assests/images/happy-1836445_1920.jpg"
import Img4 from "../assests/images/woman-4685862_1920.jpg"
import Testimonial from "./partials/Testimonial";
import "../styles/testimonials.css"

export default function Testimonials(){
    const data = [
        {
            img:Img1,
            name:"Kelvin Swapsh",
            role:"Technical Writer"
        },
        {
            img:Img4,
            name:"Aisha Olawale",
            role:"CEO Kola Tech"
        },
        {
            img:Img2,
            name:"Tristan Favor",
            role:"Mechanical Engineer"
        },
        {
            img:Img3,
            name:"Abdulhakeem Mustapha",
            role:"System Analyst"
        },
    ]
    return(
        <section className="Container center column">
            <h2 className="titletext textcenter">Our customers love us</h2>
            <section className="testimonials">
                {
                    data.map(({img,name,role}) => (
                        <Testimonial img={img} name={name} role={role} key={name} />
                    ))
                }
            </section>
        </section>
    )
}