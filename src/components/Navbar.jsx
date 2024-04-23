import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between items-center p-3'>
      <div>
        <h1 className='text-2xl font-bold'>
          ALAPHIA Francis
        </h1>
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-xl'>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30}/>}
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? 'block  fixed w-full top-0 bg-white p-5 h-full' : 'hidden'} mt-4 lg:mt-0`}>
        <ul className='flex flex-col lg:flex-row items-center gap-4'>
          <li>
            <a href="#about" className='block lg:inline-block' onClick={toggleMenu}>
              A propos de moi
            </a>
          </li>
          <li>
            <a href="#skills" className='block lg:inline-block' onClick={toggleMenu}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className='block lg:inline-block' onClick={toggleMenu}>
              Projets
            </a>
          </li>
          {/* <li>
              <a href="#/" className='block lg:inline-block' onClick={toggleMenu}>
                Contacts
              </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
