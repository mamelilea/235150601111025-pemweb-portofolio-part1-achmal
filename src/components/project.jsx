import React, { useState, useRef, useEffect } from "react"
import '../index.css'
import gameCorner from '../assets/project/game-corner.png'
import gameIcon from '../assets/project/gameIcon.png'
import galeriIcon from '../assets/project/galeriIcon.png'
import galeriku from '../assets/project/galeriku.png'
import web from '../assets/project/achmal-web.png'
import webIcon from '../assets/project/webIcon.png'
import porto from '../assets/project/porto.png'
import portoIcon from '../assets/project/portoIcon.png'
import cv from '../assets/project/cv.png'
import cvIcon from '../assets/project/cvIcon.png'
import materi from '../assets/project/materi.png'
import materiIcon from '../assets/project/materiIcon.png'
import dicoding from '../assets/project/dicoding.png'
import dicodingIcon from '../assets/project/dicodingIcon.png'
import newYear from '../assets/project/2024.png'
import newYearIcon from '../assets/project/2024Icon.png'


const ProjectCard = ({ icon, frontText, imgContent, titleDesc, tech, link }) => {
    return (
        <div data-aos="fade-up-left" className="card overflow-visible lg:w-96 w-72 h-56 lg:h-72">
            <div className="content w-full h-full rounded">
                <div className="back bg-gray-900 absolute w-full h-full rounded overflow-hidden justify-center flex items-center">
                    <div className="back-content absolute bg-gray-900 rounded text-white flex flex-col justify-center items-center w-[99%] h-[99%] gap-8">
                        <img src={icon} alt="" />
                        <strong className="-mt-10">{frontText}</strong>
                    </div>
                </div>
                <div className="front bg-gray-900 absolute w-full h-full rounded overflow-hidden">
                    <div className="img absolute w-full h-full object-cover object-center">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="left"></div>
                        <div className="circle" id="bottom"></div>
                        <div className="circle" id="top"></div>
                    </div>

                    <div className="front-content absolute w-full h-full p-2 flex flex-col justify-between">
                        <content className="project-img">
                            <img src={imgContent} alt="" />
                        </content>
                        <div className="description flex w-full">
                            <div className="w-full">
                                <div className="title max-w-full flex justify-between text-xs">
                                    <p className="title w-10/12">
                                        <strong>{titleDesc}</strong>
                                    </p>
                                </div>
                                <p className="card-footer">tech &nbsp; : {tech}</p>
                            </div>
                            <button className="">
                                <a href={link} target="_blank">
                                    <span>visit</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};





const project = () => {
    // nyoba tabs

    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 3,
    })

    const wrapperRef = useRef(null)

    const handleKeyDown = e => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    })
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    })
                }
            }
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    })
    return (
        <>
            <div className='project w-screen bg-slate-950 dark:bg-black px-12 py-10 z-[5] relative'>
                <h1 data-aos="fade-down" id="project" className="text-white lg:text-4xl text-2xl font-unigeo text-center lg:py-10">My Projects</h1>
                {/* card project */}
                <section className="max-w-full" aria-multiselectable="false">
                    <ul
                        data-aos="fade-up-left"
                        className="flex items-center justify-center border-b border-slate-950"
                        role="tablist"
                        ref={wrapperRef}
                    >
                        <li className="" role="presentation">
                            <button
                                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-cyan-50 hover:text-cyan-500 focus:bg-cyan-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                                    ? "border-cyan-500 stroke-cyan-500 text-cyan-500 hover:border-cyan-600  hover:text-cyan-600 focus:border-cyan-700 focus:stroke-cyan-700 focus:text-cyan-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-cyan-500 hover:text-cyan-500 focus:border-cyan-600 focus:stroke-cyan-600 focus:text-cyan-600 disabled:text-slate-500"
                                    }`}
                                id="tab-label-1a"
                                role="tab"
                                aria-setsize="3"
                                aria-posinset="1"
                                tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                                aria-controls="tab-panel-1a"
                                aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                                    }`}
                                onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                            >
                                <span>All</span>
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-cyan-50 hover:stroke-cyan-600 focus:bg-cyan-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                                    ? "border-cyan-500 stroke-cyan-500 text-cyan-500 hover:border-cyan-600  hover:text-cyan-600 focus:border-cyan-700 focus:stroke-cyan-700 focus:text-cyan-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-cyan-500 hover:text-cyan-500 focus:border-cyan-600 focus:stroke-cyan-600 focus:text-cyan-600 disabled:text-slate-500"
                                    }`}
                                id="tab-label-2a"
                                role="tab"
                                aria-setsize="3"
                                aria-posinset="2"
                                tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                                aria-controls="tab-panel-2a"
                                aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                                    }`}
                                onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                            >
                                <span>Portfolio</span>
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-cyan-50 hover:stroke-cyan-600 focus:bg-cyan-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                                    ? "border-cyan-500 stroke-cyan-500 text-cyan-500 hover:border-cyan-600  hover:text-cyan-600 focus:border-cyan-700 focus:stroke-cyan-700 focus:text-cyan-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-cyan-500 hover:text-cyan-500 focus:border-cyan-600 focus:stroke-cyan-600 focus:text-cyan-600 disabled:text-slate-500"
                                    }`}
                                id="tab-label-3a"
                                role="tab"
                                aria-setsize="3"
                                aria-posinset="2"
                                tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                                aria-controls="tab-panel-2a"
                                aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                    }`}
                                onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                            >
                                <span>Other</span>
                            </button>
                        </li>
                    </ul>
                    <div className="">
                        <div
                            className={`px-6 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"
                                }`}
                            id="tab-panel-1a"
                            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                            role="tabpanel"
                            aria-labelledby="tab-label-1a"
                            tabindex="-1"
                        >
                            <div className='lg:grid lg:grid-cols-3 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                                <ProjectCard
                                    icon={gameIcon}
                                    frontText="Game Corner"
                                    imgContent={gameCorner}
                                    titleDesc="Game Corner Filkom UB"
                                    tech="Figma, React, Tailwind, Node JS, Vercel."
                                    link="https://s.id/game-corner"
                                />
                                <ProjectCard
                                    icon={galeriIcon}
                                    frontText="GaleriKu"
                                    imgContent={galeriku}
                                    titleDesc="Galeri Project"
                                    tech="HTML, CSS"
                                    link="https://mamelilea.github.io/galeri-achmal/galeri.html"
                                />
                                <ProjectCard
                                    icon={webIcon}
                                    frontText="Achmal Web"
                                    imgContent={web}
                                    titleDesc="Achmal Web Portfolio"
                                    tech="HTML, Bootstrap, Jquery, Java Script"
                                    link="https://bit.ly/achmal-web"
                                />
                                <ProjectCard
                                    icon={portoIcon}
                                    frontText="Achmal Porto"
                                    imgContent={porto}
                                    titleDesc="Achmal Portfolio"
                                    tech="HTML, Bootstrap, Jquery, Java Script, AOS Animation"
                                    link="https://mamelilea.github.io/achmal-porto/portofolionew.html"
                                />
                                <ProjectCard
                                    icon={cvIcon}
                                    frontText="My CV"
                                    imgContent={cv}
                                    titleDesc="My Curiculum Vitae"
                                    tech="HTML, CSS"
                                    link="https://bit.ly/achmal-cv"
                                />
                                <ProjectCard
                                    icon={materiIcon}
                                    frontText="Web Materialize"
                                    imgContent={materi}
                                    titleDesc="Website Materialize"
                                    tech="HTML, Materialize"
                                    link="https://mamelilea.github.io/porto-materialize/coba.html"
                                />
                                <ProjectCard
                                    icon={dicodingIcon}
                                    frontText="Portfolio Dicoding"
                                    imgContent={dicoding}

                                    titleDesc="Website Portfolio Dicoding"
                                    tech="HTML, CSS, Java Script"
                                    link="https://mamelilea.github.io/website-dicoding/"
                                />
                                <ProjectCard
                                    icon={newYearIcon}
                                    frontText="New Year"
                                    imgContent={newYear}
                                    titleDesc="Website Countdown 2024"
                                    tech="React, Tailwind"
                                    link="https://s.id/happy-2k24"
                                />
                            </div>
                        </div>
                        <div
                            className={`px-6 py-4 ${tabSelected.currentTab === 2 ? "" : "hidden"
                                }`}
                            id="tab-panel-2a"
                            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                            role="tabpanel"
                            aria-labelledby="tab-label-2a"
                            tabindex="-1"
                        >
                            <div className='lg:grid lg:grid-cols-3 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                                <ProjectCard
                                    icon={webIcon}
                                    frontText="Achmal Web"
                                    imgContent={web}
                                    titleDesc="Achmal Web Portfolio"
                                    tech="HTML, Bootstrap, Jquery, Java Script"
                                    link="https://bit.ly/achmal-web"
                                />
                                <ProjectCard
                                    icon={portoIcon}
                                    frontText="Achmal Porto"
                                    imgContent={porto}
                                    titleDesc="Achmal Portfolio"
                                    tech="HTML, Bootstrap, Jquery, Java Script, AOS Animation"
                                    link="https://mamelilea.github.io/achmal-porto/portofolionew.html"
                                />
                                <ProjectCard
                                    icon={cvIcon}
                                    frontText="My CV"
                                    imgContent={cv}
                                    titleDesc="My Curiculum Vitae"
                                    tech="HTML, CSS"
                                    link="https://bit.ly/achmal-cv"
                                />
                                <ProjectCard
                                    icon={materiIcon}
                                    frontText="Web Materialize"
                                    imgContent={materi}
                                    titleDesc="Website Materialize"
                                    tech="HTML, Materialize"
                                    link="https://mamelilea.github.io/porto-materialize/coba.html"
                                />
                                <ProjectCard
                                    icon={dicodingIcon}
                                    frontText="Portfolio Dicoding"
                                    imgContent={dicoding}

                                    titleDesc="Website Portfolio Dicoding"
                                    tech="HTML, CSS, Java Script"
                                    link="https://mamelilea.github.io/website-dicoding/"
                                />
                            </div>
                        </div>
                        <div
                            className={`px-6 py-4 ${tabSelected.currentTab === 3 ? "" : "hidden"
                                }`}
                            id="tab-panel-3a"
                            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                            role="tabpanel"
                            aria-labelledby="tab-label-3a"
                            tabindex="-1"
                        >
                            <div className='lg:grid lg:grid-cols-3 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                                <ProjectCard
                                    icon={gameIcon}
                                    frontText="Game Corner"
                                    imgContent={gameCorner}
                                    titleDesc="Game Corner Filkom UB"
                                    tech="Figma, React, Tailwind, Node JS, Vercel."
                                    link="https://s.id/game-corner"
                                />
                                <ProjectCard
                                    icon={galeriIcon}
                                    frontText="GaleriKu"
                                    imgContent={galeriku}
                                    titleDesc="Galeri Project"
                                    tech="HTML, CSS"
                                    link="https://mamelilea.github.io/galeri-achmal/galeri.html"
                                />
                                <ProjectCard
                                    icon={newYearIcon}
                                    frontText="New Year"
                                    imgContent={newYear}
                                    titleDesc="Website Countdown 2024"
                                    tech="React, Tailwind"
                                    link="https://s.id/happy-2k24"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default project
