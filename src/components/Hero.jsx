import React from 'react'
import "./Hero.css"
import Title from"./Title"
const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO TECH-STRATUP" title="BEST TECH-SPACE "  />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus facere explicabo?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eos hic iste tempora eveniet dignissimos fuga tenetur unde earum ipsam.</p>
                    <div className="button">
                        <button className="primary-btn">
                            Be Ready<i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero