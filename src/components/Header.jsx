import React, { useEffect, useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { fetchProfile } from '../api/github';
import Stats from './Stats';

function Header() {
    const [githubData,setGithubData] = useState({})
    async function pullGithubData(){
        const response = await fetchProfile();
        if (response.status===200) {
            const data = await response.json();
            setGithubData(data)
        }
    }
    useEffect(() => {
      pullGithubData()
    }, [githubData])
    
    return (
        <div className='flex justify-center w-full min-h-screen items-center flex-col px-4 gap-8 lg:px-0'>
            <div className='w-full grid-cols-1 max-w-screen-lg lg:w-3/4 xl:w-3/4 items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div data-aos='fade-right' className='w-60 h-60 lg:h-80 xl:h-96 xl:w-96 rounded-full overflow-hidden' style={{backgroundImage: `url(${githubData?.avatar_url})`,backgroundSize:"cover" }}>
                        <img src={githubData?.avatar_url} className='w-full hidden h-full object-cover' alt="" />
                    </div>
                    <div className='mt-8 lg:mt-0' data-aos='fade-left'>
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
            <Stats githubData={githubData}/>
        </div>
    );
}

export default Header;
