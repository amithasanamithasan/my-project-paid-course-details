
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import PropTypes from 'prop-types';

const Courses = ( { handelAddCoursename}) => {
   const[courses, setCourses]=useState([]);


useEffect(()=>{
 fetch('allcourse.json')
 .then(res=> res.json())
 .then(data=> setCourses(data)) 
},[])
    return (
      

        <div className="md:w-3/5 grid grid-cols-3 gap-3 mt-8">
     
             
             {
                courses.map(course=> <Course 
                    key={course.id} 
                    course={course} 
            handelAddCoursename={handelAddCoursename}
               
                ></Course>)
            }
     
           <h1>All course:{courses.length}</h1>
        </div>
    );
};
Courses.propTypes={
    handelAddCoursename:PropTypes.func.isRequired
}

export default Courses;