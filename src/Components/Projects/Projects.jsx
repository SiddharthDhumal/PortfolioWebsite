import { Carousel  } from "@material-tailwind/react";
import ProjectData from "../../data/data";

function Projects(){
    return(
      <main className="font-mono mt-8 mb-20 h-auto mx-auto lg:px-52 sm:px-2">
          <h1 className="font-bold tracking-wide my-8 lg:text-4xl sm:text-2xl">Projects</h1>
          <Carousel className="rounded-xl text-gray-100 bg-slate-100  shadow-3xl border-2 border-solid border-sky-500 lg:w-full lg:h-full sm:w-11/12 sm:h-full sm:mx-auto">

            {ProjectData.map((project)=>(
          <div key={project.name} className="flex justify-center items-center lg:gap-x-10 sm:gap-x-2 lg:px-24 sm:px-2 lg:flex-row sm:flex-col-reverse">
             {/* className="w-4/6  mx-auto" */}
            <div className="lg:w-4/6 sm:w-full lg:p-0 sm:py-4 sm:px-2">
            <h2 className="mx-auto">
              <span className="text-md font-semibold inline-block mb-2">{project.name}</span>
            </h2>
            <div className="flex flex-col justify-center items-center gap-x-5">
            {/* className="w-3/6" */}
                <p className="block w-full lg:my-0 sm:mb-4">{project.Date}</p>
                {/* className="w-3/6" */}
                <div>
                    <span className="mb-3 inline-block"><span className="font-bold leading-8 inline-block">Skills : </span>{project.skills.join(" , ")}</span>
                    <ul className="lg:list-disc">
                     {
                        project.Description.map(desc=>(
                           <li key={desc} className="lg:mb-2 lg:my-0 sm:my-4">{desc}</li>
                        ))
                     }
                     
                    </ul>
                </div>
            </div>
            </div>
             {/* className="w-2/6 my-16" */}
             <a href={project.DemoLink} target="_blank" rel="noreferrer">
             <img className="w-[28rem] h-80  lg:my-40 sm:my-6" src={project.photo} alt={project.name}/>
             </a>
          </div>
          ))}
            </Carousel>
        </main>
    )
}

export default Projects;