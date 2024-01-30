import React from "react";

export default function ServicesTOC(){
    const tableContent = ["tire installation", "tire rotation", "tire balancing", "tire alignment", "tire repair", "tire replacement"]
    const handelClick = (item) => {
        const el = document.getElementById(item);
        console.log(el)
        if(el){
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }
    return(
        <section className="Container">
            <h2 className="titletext">Further servives we offer</h2>
            <section className="services-toc-content">
                <section className="services-toc">
                    {tableContent.map((item,index) => (
                        <article key={item + index} id={item}>
                            <h2 className="subheadingtext" style={{textTransform:"capitalize"}}>{item}</h2>
                            <p className="articletext">Fugiat Lorem reprehenderit id nisi aliquip. Adipisicing esse do do officia pariatur dolor veniam dolor dolore ipsum deserunt in veniam exercitation. Dolor culpa id veniam pariatur do labore tempor in id consectetur laboris amet cillum pariatur.</p>
                            <p className="articletext">Laboris nulla velit mollit in duis cillum fugiat. Quis non eu sint sint exercitation eiusmod aliqua eu non cupidatat dolore eu tempor tempor. In ex fugiat dolor laborum. Fugiat excepteur veniam dolor labore veniam ipsum occaecat occaecat. Deserunt laboris dolor ipsum cupidatat anim consectetur id ex tempor aliqua aute nulla officia sit.</p>
                        </article>
                    ))}
                </section>
                <section className="toc">
                    <h5 className="leadtext">Table of contents</h5>
                    <ul>
                        {tableContent.map((item,index) => (
                            <li key={item + index} onClick={() => handelClick(item)}>{item}</li>
                        ))}
                    </ul>
                </section>
            </section>
        </section>
    )
}