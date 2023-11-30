import linkdeinLogo from '../../assets/linkdeinLogo2.webp';
import githubLogo from '../../assets/githubLogo.png';

function Footer(){
    return(
        // sticky bottom-0 right-0 left-0 z-10
       <footer className="font-mono relative bottom-0 right-0 left-0  mx-auto  my-16 lg:w-11/12 sm:my-0 sm:py-10 sm:w-full">
        {/* <div className="fixed bottom-0 w-11/12  mx-auto my-24 "> */}
        <hr className="h-4 mb-4 border-grey-700 lg:w-auto sm:w-full"/>
          <ul className="flex justify-around mx-auto gap-x-40 items-center text-left lg:space-x-10 lg:flex-row sm:flex-col sm:items-start">
            <li className="lg:ml-6 lg:w-2/12 sm:mx-8 sm:my-2">
                <h4 className="font-semibold mb-1 lg:text-xl sm:text-lg">Phone</h4>
                <p>+91- 8329237036</p>
            </li>
            <li className="lg:w-2/12  sm:mx-8 sm:my-2">
                <h4 className="font-semibold mb-1 lg:text-xl sm:text-lg">Email</h4>
                <p>Siddharthdhumal210@gmail.com</p>
            </li>
            <li className="lg:w-2/12 sm:w-10/12 sm:mx-8 sm:my-2">
                <h4 className="font-semibold mb-1 lg:text-xl sm:text-lg">Connect With Me</h4>
                <p className="flex justify-start items-end">
                    <a href="https://www.linkedin.com/in/siddharth-dhumal-374512191/" target="_blank" rel="noreferrer">
                   <img width="30px" height="30px" src={linkdeinLogo} alt="linkdeinlogo"/> 
                   </a>
                   <a href="https://github.com/SiddharthDhumal" target="_blank" rel="noreferrer">
                    <img width="30px" height="30px" src={githubLogo} alt="githubLogo"/>
                    </a>
                </p>
            </li>
            <li className="lg:w-2/12 mr-6 lg:text-sm sm:text-xs sm:w-4/6 sm:mx-8 sm:my-2">
                <p>
                 © 2035 By Siddharth Dhumal.
                 Powered and secured by Sid
                 </p>
            </li>
          </ul>
          {/* </div> */}
       </footer>
    )
}

export default Footer;