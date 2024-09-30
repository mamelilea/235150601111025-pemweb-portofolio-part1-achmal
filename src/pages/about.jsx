import React from 'react'
import fotoku from '../assets/hai.png'

const about = () => {

    return (
        <div id="about" className='bg-[#F5F5F5] dark:bg-slate-950 w-screen h-max sm:h-[80vh] py-10 z-20 relative'>
            <div className='flex flex-col justify-center items-center  w-screen h-[80%]'>
                <div data-aos="fade-right" className='w-[90%] sm:w-[80%] flex sm:flex-row flex-col items-center justify-center'>
                    <div className='w-[100%] sm:w-[40%] flex justify-start'>
                        <img src={fotoku} alt="foto Achmal" className='w-[80%]' />
                    </div>
                    <div className='w-[95%] sm:w-[60%] flex flex-col justify-start'>
                        <h1 data-aos="fade-down" className="text-[#0c0c0c] dark:text-white lg:text-4xl md:text-[3.8rem] text-2xl font-unigeo text-center m-5">About Me</h1>
                        <p className='text-justify text-[#0c0c0c] dark:text-white opacity-70 font-normal lg:text-xl md:text-3xl text-base '>
                            Hello everyone, allow me to introduce myself. I am Achmal Pradipta Aditama, NIM.23*********** commonly known as Achmal. Currently, I am pursuing my education at Brawijaya University, Faculty of Computer Science, majoring in Information Technology Education. My specific interest lies in the field of front-end development. Up to this point, I have successfully completed several personal projects and collaborated on team projects. Further information about my journey and works can be found on this website. Thank you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
