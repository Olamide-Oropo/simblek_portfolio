import React,{useContext, useRef,useState} from "react"
import Logo from "./partials/Logo";
import { Link } from "react-router-dom";
import useSmallViewport from "../hooks/useSmallViewport"
import ActiveLinkContext from "../contexts/ActiveLinkContent";
import {DropdownIcon} from "../assests/icons/Icons";
import links from "./partials/Links";
import "../styles/header.css"

export default function Header(){
    const [active,setActive] = useContext(ActiveLinkContext)
    const isSmallViewport = useSmallViewport(800);
    const navdrawer = useRef(null);
    const [isOpenDrawer,setIsOpenDrawer] = useState(false)
    const Links = links();
    const tyres  = ["Passenger","Commercial","Speciality","Truck","Motorcycle"]
    const onOpen = () => {
        setIsOpenDrawer(navdrawer.current.checked)
    }
    return(
        <header>
            <section>
                <Logo />
                <p>Simblek</p>
            </section>
            {
                isSmallViewport&&
                <div aria-label="on Click for drawer" role="button" className="navdrawercontainer">
                    <input type="checkbox" name="navdrawer" id="navdrawer" ref={navdrawer} onClick={onOpen}/>
                    <label htmlFor="navdrawer" className="navlabel"></label>
                </div>
            }
            <nav style={{top:isSmallViewport && (isOpenDrawer? "100%":"-310px"),opacity:isSmallViewport && (isOpenDrawer? "1":"0")}}>
                <ul>
                    {Links.map(({name,anchor}) => {
                        return(
                            name === "Tyre Sizes"? (
                                <li  key={name}>
                                    <div aria-label="dropdown">
                                        {name}
                                        <DropdownIcon dimension={"19"} fillColor={"#494949"}/>
                                        <div role="group">
                                            {
                                                tyres.map((item,i) => (
                                                    <div role="option" key={item + i}>{item} tyres </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </li>
                            ):(
                                <li key={name}><Link to={`/simblek_project_porfolio${anchor}`} className={name === active?"activepill":"pill"}>{name} {(name === "Contact" || name === "About") && "us"}</Link></li>
                            )
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
