import React from "react";
import Header from "../component/Header"
import Footer from "../component/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "../component/partials/Alert";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";
import { Twitter,Instagram,Whatsapp,FaceBook,Telephone,Location,Envelope } from "../assests/icons/Icons";
import "../styles/contact.css";

export default function Contactus(){
    const color = "#fff";
    useActive("Contact");
    useTitle("Reach out to our eager team | Enquire about us")
    const [isOpen,setIsOpen] = React.useState(false)
    const [name,setName] = React.useState("Current user")
    const {handleChange,errors,values,isValid,resetForm} = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            phoneNo:"",
            message:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(50,"Must be less than 50 characters").min(2,"Must be more than 2 characters").required("Required"),
            lastname:Yup.string().max(50,"Must be less than 50 characters").min(2,"Must be more than 2 characters").required("Required"),
            email:Yup.string().email(" Enter a valid email").required("Required"),
            phoneNo:Yup.string().min(11,"Must be more than 10 characters").required("Required"),
            message:Yup.string().max(200,"Must be less than 200 characters").min(10," Must be more than 10 characters").required("Required"),
        })
    })
    const handleSubmit = (e) => {
        setName(values.firstname)
        setIsOpen(!isOpen)
        e.preventDefault()
        resetForm()
    }
    return(
        <>
            <Header />
            <main className="Container contactme-container">
                <section className="contactme">
                    <h2 className="titletext">Contact Us</h2>
                    <p className="articletext">Our friendly team would love to hear from you.</p>
                    <Alert isOpen={isOpen} setIsOpen={setIsOpen} text={`${name} your Message has been sent`} />
                    <form name="contantmeform" className="contantmeform" onSubmit={handleSubmit}>
                        <section className="nameinputs">
                            <section>
                                <label htmlFor="firstname">First name</label>
                                <input onChange={handleChange} value={values.firstname} name="firstname" type="text" className="simblek-input" placeholder="First name" />
                                {(errors.firstname) && <p className="errormsg">{errors.firstname}</p>}
                            </section>
                            <section>
                                <label htmlFor="lastname">Last name</label>
                                <input onChange={handleChange} value={values.lastname} name="lastname" type="text" className="simblek-input" placeholder="Last name"/>
                                {(errors.lastname) && <p className="errormsg">{errors.lastname}</p>}
                            </section>
                        </section>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} value={values.email} name="email" className="simblek-input" type="email" placeholder="you@company.com" />
                        {(errors.email) && <p className="errormsg">{errors.email}</p>}
                        <label htmlFor="phoneNo">Phone number</label>
                        <input onChange={handleChange} value={values.phoneNo} name="phoneNo" className="simblek-input" type="tel" placeholder="+123 4567 8912" />
                        {(errors.phoneNo) && <p className="errormsg">{errors.phoneNo}</p>}
                        <label htmlFor="message">Message</label>
                        <textarea onChange={handleChange} value={values.message} name="message" className="simblek-input" placeholder="Message us"/>
                        {(errors.message) && <p className="errormsg">{errors.message}</p>}
                        <button className="mainsimblekbtn" type="submit" disabled={!isValid}>Send Message</button>
                    </form>
                </section>
                <section className="contact-info-container">
                    <h2>Contact Information</h2>
                    <section className="contact-info">
                        <span>
                            <Telephone dimension={"20"} fillColor={color} />
                            <p>+123 4567 8912</p>
                        </span>
                        <span>
                            <Envelope dimension={"20"} fillColor={color} />
                            <p>simblektyres@simblek.com</p>
                        </span>
                        <span>
                            <Location dimension={"20"} fillColor={color} />
                            <p>123 Iyanapaja Road,Elejushi lagos Nigeria.</p>
                        </span>
                    </section>
                    <section className="contact-info-links">
                        <Twitter dimension={"20"} fillColor={color} />
                        <Instagram dimension={"20"} fillColor={color} />
                        <Whatsapp dimension={"20"} fillColor={color} />
                        <FaceBook dimension={"20"} fillColor={color} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}