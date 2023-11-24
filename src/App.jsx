import Header from './component/header/Header'
import './App.css'
import Courses from './Courses'
import Coursename from './Coursename'
import { useState } from 'react'



function App() {


 const [coursename, setCoursesname]=useState([]);


const handelAddCoursename=course=>
{

    const newcoursename =[...coursename,course]
    setCoursesname(newcoursename);
  

}






  return (
    <>
  
     <Header></Header>
     <div className='flex'>
     <Courses   handelAddCoursename={handelAddCoursename}></Courses>
     <Coursename coursename={coursename}  ></Coursename>
     {/* <Remaininghours ></Remaininghours> */}
     </div>
    
 

    </>
  )
}

export default App
