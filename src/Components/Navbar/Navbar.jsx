import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    
    const [scroll, setScroll] = useState(false);
    const [isOpen,setIsOpen] = useState(false);

    useEffect(function(){
      window.onscroll = function(){
        if(window.scrollY>20){
            setScroll(true)
        }else{
            setScroll(false)
        }
      }
    },[])

    // 'sm': '320px',
    // 'md': '576px',
    // 'lg': '768px',
    // 'xl': '1024px',
    // '2xl': '1280px',
    // '3xl': '1600px',

    return(
        <nav className={scroll ? 'font-monserrat flex flex-row justify-between  sticky top-0 z-10 shadow-xl drop-shadow-2xl backdrop-opacity-100 backdrop-blur-2xl backdrop-contrast-100 sm:p-2 sm:w-full lg:py-6 lg:px-14 ':
        'flex flex-row justify-between sticky top-0 z-10 sm:p-2 sm:w-full lg:py-6 lg:px-14 font-monserrat'}>
            <div className="flex flex-row items-center">
                <>
                <span className="border rounded-3xl bg-amber-500 sm:w-5 sm:h-5 lg:w-7 lg:h-7"></span>
                <NavLink to="/">
                <h2 className="text-gray-950  font-sans font-bold mx-2 sm:text-sm lg:text-xl">Siddharth S. Dhumal</h2> 
                </NavLink>
                </>
                <span className="sm:text-xs lg:text-base">Software Developer</span>
            </div>

            <div onClick={()=>setIsOpen(!isOpen)} className='flex  justify-center items-center sm:text-xl lg:hidden sm:block lg:text-base cursor-pointer'>
            <ion-icon  name={isOpen ? 'close':'menu'}></ion-icon>
           </div>

            <ul className={`flex  justify-center lg:items-center sm:items-start sm:text-xs sm:flex-col lg:flex-row  lg:text-base transition-all duration-500 ease-in sm:w-full lg:w-auto sm:absolute lg:static sm:left-0 sm:text-bold sm:p-4 lg:p-0 ${isOpen ? 'top-9 lg:top-auto sm:z-10 lg:z-0 sm:shadow-xl lg:shadow-none drop-shadow-2xl backdrop-opacity-100 backdrop-blur-2xl backdrop-contrast-100 ':'top-[-490px]'} `}>
             <li  className="sm:mb-px sm:py-2 lg:p-auto sm:duration-500"> <NavLink to="/resume">Resume</NavLink><span className="lg:mx-3 leading-loose font-thin lg:inline-block sm:hidden"> | </span></li>
             <li  className="sm:mb-px sm:py-2  lg:p-auto  sm:duration-500"> <NavLink to="/projects">Projects</NavLink><span className="lg:mx-3  leading-loose font-thin lg:inline-block sm:hidden"> | </span></li>
            <li className="sm:duration-500 sm:py-2 lg:p-auto "> <NavLink to="/contact">Contact</NavLink></li>
            </ul>

         
        </nav>
    )
}   


// <ul className="flex  justify-center items-center sm:text-xs sm:flex-col lg:flex-row  lg:text-base">
// <li  className="sm:mb-px"> <NavLink to="/resume">Resume</NavLink><span className="lg:mx-3 leading-loose font-thin lg:inline-block sm:hidden"> | </span></li>
// <li  className="sm:mb-px"> <NavLink to="projects">Projects</NavLink><span className="lg:mx-3  leading-loose font-thin lg:inline-block sm:hidden"> | </span></li>
// <li> <NavLink to="contact">Contact</NavLink></li>
// </ul>





export default Navbar;