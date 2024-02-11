import React from 'react'
import "../Styles/Skills.css"
import skillImg from '../assets/skill.png'


function Skills() {
  return (
    <>
    <section className="skills">
        <div className="sec-head">
            <p>Skills</p>
        </div>
        <hr />
        <div className="wrapper">
            <div className="skillImg">
                <img src={skillImg} alt="boy with laptop" />
            </div>
            <div className="prog-bar">
                <div className="pb-html">
                    <div className="skill-percent">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-css">
                    <div className="skill-percent">
                        <p>CSS</p>
                        <p>80%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-js">
                    <div className="skill-percent">
                        <p>JavaScript</p>
                        <p>70%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-react">
                    <div className="skill-percent">
                        <p>React</p>
                        <p>70%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills