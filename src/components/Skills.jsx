import React from 'react';
import { IoLogoReact, IoLogoVue,IoLogoJavascript, } from "react-icons/io5";
import { BiLogoTailwindCss, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiLogoGithub, BiLogoMongodb } from "react-icons/bi";
import { FaRaspberryPi, FaUbuntu, FaDebian } from "react-icons/fa6";
import { DiMysql } from 'react-icons/di';
import { SiArduino, SiFlutter, SiLaravel, SiSvelte } from 'react-icons/si';

function Skills() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-screen-lg px-3'>
        <h1 className='text-3xl font-bold mb-12 text-center'>
          Compétences
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-12'>
          <div className='w-full'>
            <h1 className='text-xl font-semibold mb-5'>
              Front-End
            </h1>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-right">
              <SkillItem icon={<IoLogoReact size={95} />} text="React Js" />
              <SkillItem icon={<BiLogoTailwindCss size={95} />} text="Tailwindcss" />
              <SkillItem icon={<IoLogoVue size={95} />} text="Vuejs" />
              <SkillItem icon={<SiFlutter size={95} />} text="Flutter" />
              <SkillItem icon={<SiSvelte size={95} />} text="Svelte" />
              <SkillItem icon={<IoLogoJavascript size={95} />} text="Javascript" />
             {/*  <SkillItem icon={<IoLogoSass size={95} />} text="SASS" /> */}
            </div>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-semibold mb-5'>
              Back-end et Outils
            </h1>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-left">
              <SkillItem icon={<BiLogoNodejs size={95} />} text="NodeJs" />
              <SkillItem icon={<BiLogoPhp size={95} />} text="PHP" />
              <SkillItem icon={<BiLogoPython size={95} />} text="Python" />
              <SkillItem icon={<SiLaravel size={95} />} text="Laravel" />
              <SkillItem icon={<BiLogoGithub size={95} />} text="Github" />
            </div>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-semibold mb-5'>
              Bases de données
            </h1>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-right">
              <SkillItem icon={<BiLogoMongodb size={95} />} text="Mongodb" />
              <SkillItem icon={<DiMysql size={95} />} text="MySQL" />
              <SkillItem icon={<FaDebian size={95} />} text="Debian" />
            </div>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-semibold mb-5'>
              IoT
            </h1>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-left">
              <SkillItem icon={<FaRaspberryPi size={95} />} text="RaspberryPi et Orange pi" />
              <SkillItem icon={<SiArduino size={95} />} text="Electronique en général" />
            </div>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-semibold mb-5'>
              Systèmes
            </h1>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-left">
              <SkillItem icon={<FaUbuntu size={95} />} text="Ubuntu" />
              <SkillItem icon={<FaDebian size={95} />} text="Debian" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ icon, text }) {
  return (
    <div className='p-6 border flex items-center flex-col border-gray-900 rounded'>
      {icon}
      <span className='mt-3'>
        {text}
      </span>
    </div>
  );
}

export default Skills;
