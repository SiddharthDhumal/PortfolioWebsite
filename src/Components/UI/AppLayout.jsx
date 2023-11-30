import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import { Fragment } from "react";

function AppLayout(){
     return(
        <div  className="sm:min-w-full sm:mx-auto sm:px-auto lg:w-auto">
        <Navbar/>
         <Outlet />
        <Footer/>
        </div>
     )
}

export default AppLayout;