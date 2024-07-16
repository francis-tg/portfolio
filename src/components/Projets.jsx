import React from 'react'
import { IoEye, IoLogoGithub } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'

const Projects = [
    {
        name: "Portfolio du cabinet ACTe Kara (en cours de développement)",
        url: "https://cabinet-acte.vercel.app/",
        gihub: "https://github.com/francis-tg/acte_porto.git",
        private:true
    },
    {
        name: "Application de gestion de boutique",
        url: "https://store-manager-izcr.onrender.com/",
        gihub: "https://github.com/francis-tg/gestion_app.git",
        private:true
    },
    {
        name: "Participation à la réalisation du Système d'inscription (Caméroun)",
        url: "https://inscription-univ-ebolowa.vercel.app/",
        gihub: "",
        private:true
    },
    {
        name: "Application de gestion de boutique (Partie cliente)",
        url: "https://store-client-nu.vercel.app/",
        gihub: "https://github.com/francis-tg/gestion_app_client.git",
        private:true
    },
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
              <div className='flex flex-col gap-3' >
                  {Projects.map((project, k) => (
                  <div key={k} className='w-full p-5 border flex justify-between items-center' data-aos='fade-up' data-aos-duration={600+(k*100)}>
                      <h3>
                          {project.name}
                          </h3>
                          
                          <div className='flex items-center gap-3 text-xl'>
                              <a href={project.url}>{project.private?<LuLock/>:<IoEye />}</a>
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