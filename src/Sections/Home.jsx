import React from 'react'
import "../Styles/Home.css"
import FullImg from '../assets/Joal.png'
import CircleImg from '../assets/Joal circcle.png'
function Home() {
    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="texts">
                        <p>Hey there</p>
                        <h1>I'm <span>Joal P Koshy</span></h1>
                        <h2>Web Developer</h2>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa veniam ipsam eum modi quas, praesentium illo facere tenetur ex est in facilis placeat aspernatur. Quis sint ea velit fuga?</p>
                        <div className="cv-btn">
                            <button>Download Resume</button>
                        </div>
                    </div>
                    <div className="myImg">
                        <img src={FullImg} alt="Picture of me" className='fullImg' />
                        <img src={CircleImg} alt="Picture of me" className="circleImg" width={"200px"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home