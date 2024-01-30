import React from "react";
import { Link } from "react-router-dom";
import Links from "./partials/Links";
import Logo from "./partials/Logo";
import {FaceBook,Whatsapp,Instagram,Telegram,Twitter} from "../assests/icons/Icons"
import "../styles/footer.css"

export default function Footer(){
    const color = "#045bbf"
    const links = Links()
    return(
        <footer>
            <div className="footerlogo">
                <Logo />
                <p>Simblek</p>
            </div>
            <div className="footerinternallinks">
                {links.map(({name,anchor}) => (
                    anchor === "" ? null:(<Link to={`/simblek_project_porfolio${anchor}`} key={anchor}>{name}</Link>)
                ))}
            </div>
            <div className="footerexternallinks">
                <div className="linkicons">
                    <FaceBook dimension={"25"} fillColor={color}/>
                    <Instagram dimension={"25"} fillColor={color}/>
                    <Telegram dimension={"25"} fillColor={color} />
                    <Twitter dimension={"25"} fillColor={color} />
                    <Whatsapp dimension={"25"} fillColor={color} />
                </div>
                <p>Copyright &copy; 2023 Simblek</p>
            </div>
        </footer>
    )
}