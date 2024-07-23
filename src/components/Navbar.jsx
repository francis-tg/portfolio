import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const toggleMenu = React.useCallback(() => {
    if (window.innerWidth <= 1024) { // Taille d'écran mobile
      setIsOpen((prev) => !prev);
    }
  }, []);

  const handleClickOutside = React.useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  React.useEffect(() => {

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        document.querySelector("nav").classList.add("fixed", "w-full", "bg-white/50",'backdrop-blur-sm', "shadow-lg");
      } else {
        document.querySelector("nav").classList.remove("fixed", "w-full", "bg-white/50", "shadow-lg",'backdrop-blur-sm');
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => { 
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className='flex justify-between items-center p-5 z-50'>
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
      <div
        ref={menuRef}
        className={`lg:flex ${isOpen ? 'block fixed w-full  top-0 z-50 bg-white p-5 h-full' : 'hidden'} mt-4 lg:mt-0`}
      >
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
