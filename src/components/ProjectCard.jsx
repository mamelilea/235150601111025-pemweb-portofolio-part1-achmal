import React from 'react'

const ProjectCard = ({ icon, frontText, imgContent, titleDesc, tech, link }) => {
    return (
        <div data-aos="fade-up-left" className="card overflow-visible lg:w-96 md:w-80 w-72 h-56 lg:h-72">
            <div className="content w-full h-full rounded">
                <div className="back bg-[#0c0c0c] dark:bg-gray-900 absolute w-full h-full rounded overflow-hidden justify-center flex items-center">
                    <div className="back-content absolute bg-gray-900 rounded text-white flex flex-col justify-center items-center w-[99%] h-[99%] gap-10">
                        <img src={icon} alt="" />
                        <strong className="-mt-10">{frontText}</strong>
                    </div>
                </div>
                <div className="front bg-[#0c0c0c] dark:bg-gray-900 absolute w-full h-full rounded overflow-hidden">
                    <div className="img absolute w-full h-full object-cover object-center">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="left"></div>
                        <div className="circle" id="bottom"></div>
                        <div className="circle" id="top"></div>
                    </div>

                    <div className="front-content absolute w-full h-full p-2 flex flex-col justify-between">
                        <div className="project-img">
                            <img src={imgContent} alt="" />
                        </div>
                        <div className="description flex w-full">
                            <div className="w-full">
                                <div className="title max-w-full flex justify-between text-xs">
                                    <strong>{titleDesc}</strong>
                                </div>
                                <div className="card-footer">tech &nbsp; : {tech}</div>
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
}

export default ProjectCard
