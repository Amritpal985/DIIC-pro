import React from 'react'
import Title from "./Title"
import {homeAbout} from "../dummydata"
import AWrapper from './AWrapper'
import "./About.css"
export const Aboutcard = () => {
    return ( 
        <>
        <section className="aboutHome">
        <div  className="container flexSB">
           <div className="left row">
            <img src='../../Images/st3-logo.jpg' alt="" />
            </div> 
        </div>
        <div className="right row">
            <Title subtitle="Learn and Grow" title = "Benefits of Knowledge" />
            <div className="items">
              {homeAbout.map((val)=>(
                <div className="item flexSB">
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
        </section>
        <AWrapper/>
        </>
    )
}

export default Aboutcard

