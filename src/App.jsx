
import { useState } from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Recharts from './components/Recharts/Recharts';
import SampleRechart from './components/Recharts/SampleRechart';


function App() {
  const router =[
  {
    id: 1,
    path: "Home",
    element: "home"
  }, 
  {
    id: 2,
    path: "About",
    element: "about"
  },
  {
    id: 3,
    path: "Blog",
    element: "blog"
  },
  {
    id: 4,
    path: "Service",
    element: "service"
  },
  {
    id: 5,
    path: "Contact",
    element: "contact"
  }
  ]


  const [isOkay,setIsOkay]=useState(true)
  const handleClick=()=>{
    setIsOkay(!isOkay)
  }


  return (
    <div>
      {/* <Header></Header> */}
      <div className='md:flex gap-10 items-center'>
      <div className='md:hidden' onClick={handleClick}>
        {
          isOkay?<GiHamburgerMenu className='text-2xl'></GiHamburgerMenu>:<RxCross1 className='text-2xl'></RxCross1>
        }
      </div>
      <h1 className='text-4xl font-bold'>Logo</h1>
    <div className={`md:flex gap-10 items-center duration-1000 ${isOkay? '-ml-48 md:ml-48': ''}`}>     
    {
        router.map(route => <Navbar key={route.id} route={route}></Navbar>)
      }
    </div>
    </div>
    <Recharts></Recharts>
    <SampleRechart></SampleRechart>
    </div>
  )
}

export default App
 