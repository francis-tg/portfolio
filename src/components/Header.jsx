import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

function Header() {
    return (
        <div className='flex justify-center w-full min-h-screen items-center px-4 lg:px-0'>
            <div className='w-full max-w-screen-lg lg:w-3/4 xl:w-1/2'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <div className='w-60 h-60 lg:h-80 xl:h-96 xl:w-96 rounded-full overflow-hidden' style={{backgroundImage: `url(${require('../img/mine.jpeg')})`,backgroundSize:"cover" }}>
                        <img src={require("../img/mine.jpeg")} className='w-full hidden   h-full object-cover' alt="" />
                    </div>
                    <div className='mt-8 lg:mt-0'>
                        <h1 className='text-4xl lg:text-5xl font-bold'>
                            ALAPHIA Francis,
                        </h1>
                        <p className='mt-4 lg:mt-6'>
                            Développeur Fullstack web spécialement, je suis 100% javascript.
                            Je développe en parallèle des solutions avec les technologies Flutter(dart), Php,Python.
                        </p>
                        <div className='flex flex-col mt-6 lg:mt-8 space-y-4 lg:space-y-0  lg:flex-row lg:space-x-4'>
                            <a href="https://github.com/francis-tg" className='flex items-center justify-center xl:justify-start px-4 py-3 gap-2 rounded-lg bg-black text-white'>
                                <IoLogoGithub />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/francis-alaphia-060661217/" className='flex justify-center xl:justify-start items-center px-4 py-3 gap-2 rounded-lg bg-black text-white'>
                                <IoLogoLinkedin />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
