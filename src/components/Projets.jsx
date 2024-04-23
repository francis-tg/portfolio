import React from 'react'
import { IoEye, IoLogoGithub } from 'react-icons/io5'

const Projects = [
    {
        name: "Gestion de calendrier",
        url: "https://gestion-planning-omega.vercel.app",
        gihub: "https://github.com/francis-tg/gestion_planning.git",
        private:true
    },
    {
        name: "Application de location de maison (EASYROOM)",
        url: "#",
        gihub: "https://github.com/francis-tg/EASYROOM.git",
        private:false
    },
    {
        name: "Min quiz app",
        url: "https://ista-quizapp.vercel.app",
        gihub:"https://github.com/francis-tg/quizapp.git"
    },
    {
        name: "Qr code App",
        url: "https://qrcodeapp.vercel.app",
        gihub:"https://github.com/francis-tg/QrCodeApp.git"
    },
]

function Projets() {
  return (
      <div className='py-8 flex justify-center items-center'>
          <div className='w-full max-w-screen-lg px-3'>
              <h1 className='text-3xl mb-5 font-bold'>
                  Projets
              </h1>
              <div className='flex flex-col gap-3'>
                  {Projects.map((project, k) => (
                  <div key={k} className='w-full p-5 border flex justify-between items-center'>
                      <h3>
                          {project.name}
                          </h3>
                          <div className='flex items-center gap-3 text-xl'>
                              <a href={project.url}><IoEye /></a>
                              <a href={project.gihub}><IoLogoGithub /></a>
                          </div>
                  </div>
              ))}
               </div>
          </div>
    </div>
  )
}

export default Projets