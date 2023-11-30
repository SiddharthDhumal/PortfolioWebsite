import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import AppLayout from "./Components/UI/AppLayout";
import Home from "./Components/Home/Home";


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },

      {
        path:'/resume',
        element:<Resume/>
      },
    
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  } 
])

function App(){
  return <RouterProvider router={router}/>;
}

export default App;