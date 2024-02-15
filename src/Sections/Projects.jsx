import React from 'react'
import "../Styles/Projects.css"
import mediaplayer from '../assets/mediaplayer.png'


function Projects() {
    return (
        <>
            <section className="project">
                <div className="sec-head" data-aos = 'fade-up' data-aos-duration="1000">
                    <p>Projects</p>
                </div>
                <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
                <div className="main-wrap" data-aos = 'fade-right' data-aos-duration="2000">
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="400">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="800">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="1000">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="1200">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="1400">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            {/* <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'> */}
                            <button className="">GitHub<i class="fa-brands fa-github"></i></button>
                            {/* </Link> */}
                            {/* <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'> */}
                            <button className="">Visit<i class="fa-solid fa-link"></i></button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects