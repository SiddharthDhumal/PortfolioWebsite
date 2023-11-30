function Resume(){
    return(
      // divide-y-8 divide-gray-950
        <main className=" font-mono mx-auto lg:px-52 lg:my-20 lg:w-11/12 sm:w-full sm:my-4 sm:px-4">
          <h1 className="font-bold tracking-wider lg:my-16 lg:text-4xl sm:text-2xl sm:mt-6 sm:mb-2">Resume</h1>
          <div className="flex justify-between items-start lg:my-8 sm:my-4 lg:flex-row sm:flex-col">
            <h2 className="lg:w-3/6 sm:w-full">
              <span className=" font-semibold lg:w-52 lg:inline-block lg:my-0 sm:w-full sm:my-6 sm:block lg:text-3xl sm:text-xl">Professional Experience</span>
              </h2>
            <div className="flex  justify-center items-start gap-x-5 lg:w-3/6 sm:w-full lg:flex-row sm:flex-col">
                <span className="lg:w-2/6 sm:w-full">Dec 2021 - Nov 2023</span>
                <div className="lg:w-4/6 sm:w-full">
                    <h4 className="font-bold leading-8">Assistant System Engineer</h4>
                    <span className="lg:mb-3 sm:mb-6 inline-block">Tata Consultancy Services</span>
                    <ul className="lg:list-disc">
                      <li className="lg:mb-2 sm:mb-4">Contributed as Technical Consultant on Azure Data Factory, SQL.</li>
                      <li className="lg:mb-2 sm:mb-4">Monitored system performance, identified issues, and resolved them in a timely manner.</li>
                      <li className="lg:mb-2 sm:mb-4">Responsible for analysis and giving suggestions for good productivity. </li>
                      <li className="lg:mb-2 sm:mb-4">Worked closely with the Project team to optimize the system for accessibility and speed.</li>
                      <li className="lg:mb-2 sm:mb-4">Helping the other project teams through understanding the project code structure</li>
                    </ul>
                </div>
            </div>
          </div>

          <hr className="h-4 my-4 mx-auto  border-grey-700  "/>

          <div className="flex justify-between items-start lg:my-8 sm:my-4 lg:flex-row sm:flex-col">
            <h2 className="lg:w-3/6 sm:w-full">
              <span className=" font-semibold lg:w-52 lg:my-0 lg:inline-block sm:w-full sm:my-6 sm:block lg:text-3xl sm:text-xl">Education</span>
              </h2>
            <div className="flex justify-center items-start gap-x-5 lg:w-3/6 sm:w-full lg:flex-row sm:flex-col">
                <span className="lg:w-2/6 sm:w-full">Jul 2017 - Aug 2020</span>
                <div className="lg:w-4/6 sm:w-full">
                    <h4 className="lg:mb-3 sm:mb-6 inline-block sm:font-bold ">Bachelor degree in Engineering</h4>
                    <span className="mb-2 inline-block">Shivaji University</span>
                    <p>Kolhapur, Maharashtra</p>
                </div>
            </div>
          </div>

          <hr className="h-4 my-4 mx-auto border-grey-700"/>

          <div className="flex justify-between items-start lg:my-8 sm:my-4 lg:flex-row sm:flex-col">
            <h2 className="lg:w-3/6 sm:w-full">
              <span className=" font-semibold lg:w-52 lg:my-0 lg:inline-block sm:w-full sm:my-6 sm:block lg:text-3xl sm:text-xl">Skills & Expertise</span>
              </h2>
            <div className="flex justify-center items-start gap-x-5 lg:w-3/6 sm:w-full lg:flex-row sm:flex-col">
                <span className="w-2/6"></span>
                <div className="lg:w-4/6 sm:w-full">
                    <ul>
                      <li className="lg:mb-2 sm:mb-4"><span className="mr-2 font-bold">Languages: </span> Javascript , C++ , SQL</li>
                      <li className="lg:mb-2 sm:mb-4"><span className="mr-2 font-bold">Developer Tools: </span> VS Code, Dev C++, Git, Github, POSTMAN,React Dev tools, Redux Developer tools.</li>
                      <li className="lg:mb-2 sm:mb-4"><span className="mr-2 font-bold">Web Technologies: </span> HTML, CSS, Javascript, Bootstrap, ReactJS, Redux, Redux toolkit, Material UI, Node.js, Express.js, MongoDB, Context API, Tailwind CSS , Responsive Web Design.</li>
                    </ul>
                </div>
            </div>
          </div>
        </main>
    )
}

export default Resume;