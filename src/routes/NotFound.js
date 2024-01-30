import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
            <main className="notfound">
                <h1>Page not found !</h1>
                <Link to={"/simblek_project_porfolio"}><button className="subsimblekbtn">Go to Home</button></Link>
            </main>
        </>
    )
}