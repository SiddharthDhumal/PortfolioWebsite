
/* eslint-disable react/prop-types */ 
function Buttons({children,className}){
   return(
    <button className={`border-gray-700  mx-3 my-6 text-zinc-950 leading-7 font-semibold  rounded-full bg-amber-500 hover:bg-grey-100 border transition delay-100 duration-500 ease-in-out lg:w-40 lg:h-40 lg:text-2xl sm:text-sm ${className}`}>{children}</button>
   )
}

export default Buttons;