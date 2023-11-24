
import PropTypes from 'prop-types';
import { IoBookOutline } from "react-icons/io5";

const Course = ({course, handelAddCoursename }) => {

 const{courseName,image,credit,price,description,instructor}=course;
    return (
    
    <div className=" card  pt-4 w-100 bg-base-600 shadow-xl ">
  <figure className=" px-2 pt-2 w-full ">
    <img src={image} className="rounded-xl" />
  </figure>
<h1 className=" font-serif font-bold items-center text-center">{courseName}</h1>
<br />
<h5>{description}</h5>
<br/>
<p>{instructor}</p>
<br />
<div className="flex-auto w-14">
 <p className="text-1xl w-14">$ {price}</p>  
 <p    className="text-1xl w-14"> <IoBookOutline />{credit}hrs</p>
</div>

      <button  onClick={()=>handelAddCoursename (course) }
      className="  px-20 btn text-white btn-info">
        Select</button>
    </div>



    );
};

Course.propTypes= {
course: PropTypes.object.isRequired,
handelAddCoursename:PropTypes.func
}

export default Course;