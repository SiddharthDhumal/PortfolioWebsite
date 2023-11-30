import { NavLink } from 'react-router-dom';
import myPhoto from '../../assets/siddharthphoto.png';
import Buttons from '../UI/Buttons';

function Home(){
    return(
        <div className="mx-auto w-9/12 h-5/6  flex justify-center items-center gap-x-8  lg:mt-8 lg:mb-48 lg:px-2 lg:flex-row sm:mt-16 sm:mb-4 sm:flex-col-reverse sm:w-full sm:h-full">
          <div className="  border-2 rounded-full lg:w-3/6 sm:w-11/12 sm:h-11/12 sm:my-8 ">
            <img className="border-0 bg-zinc-800 bg-contain mx-auto rounded-full shadow-2xl lg:w-[36rem] lg:h-[36rem] sm:w-80 sm:h-80"src={myPhoto} alt="my photo"/>
          </div>
          <div className="lg:w-3/6 sm:w-full sm:px-8">
            <h1 className="font-monserrat font-semibold lg:text-8xl lg:mb-6  sm:text-4xl sm:mb-2">Hello</h1>
            <h3 className="text-xl font-monserrat font-bold lg:m-2 sm:mx-0 sm:mb-4">A Bit About Me</h3>
            <p className="w-96 font-mono leading-7 lg:mx-2 sm:mx-0 sm:w-full">
               I am a Siddharth S. Dhumal. I love creating interactive, efficient, and user-friendly 
               web applications that add value to businesses.

            </p>
            <div>
               <NavLink to="/resume"><Buttons className="bg-amber-500 ml-0 sm:w-20 sm:h-20">Resume</Buttons></NavLink> 
               <NavLink to="/projects"><Buttons className="bg-red-500 sm:w-20 sm:h-20">Projects</Buttons></NavLink> 
               <NavLink to="contact"><Buttons className="bg-blue-300 sm:w-20 sm:h-20">Contact</Buttons></NavLink>
            </div>
          </div>
      
        </div>
    )
}

export default Home;