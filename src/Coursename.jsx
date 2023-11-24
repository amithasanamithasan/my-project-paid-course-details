import PropTypes from 'prop-types';
import Coursedetails from './Coursedetails';
import { useState } from 'react';


const Coursename = ( {coursename }) => {
    const totalCreditHours = coursename.reduce((total, course) => total + course.credit, 0);
 
const CreditHoursRemaining = coursename.reduce((total,course)=>total-course.credit,20);

    const [showPopup, setShowPopup] = useState(false);
    const[remainPopup, setRemainPopup]=useState(false);

    const handleClosePopup = () => {
        setShowPopup(false);
      };
      const handleRemainPopup = () => {
        setRemainPopup(false);
      };
      
      if (CreditHoursRemaining < 0 && !showPopup) {
        setShowPopup(false);
      }
    
  if (totalCreditHours > 20 && !showPopup) {
    setShowPopup(true);
  }
    return (
        <div className="text-2xl md:w-1/3 text-center pt-4 ml-4 mt-2 bg-slate-200" >
          
           <h1 > CreditHoursRemaining :{CreditHoursRemaining}</h1>

           <br/>
            <h1 >CourseName:{coursename.length}</h1>
            {
                coursename.map(coursename=> <Coursedetails 
                    key={coursename.idx} 
                    coursename={coursename}>
                   
                    </Coursedetails>)
            }

             <div>
               
        <h1>Total Credit Hour: {totalCreditHours}</h1>
       
    </div>

    {showPopup && (
        <div className="popup">
          <p>Total credits exceed 20! You may want to reconsider your course selection.</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>


      )}
       {remainPopup && (
        <div className="popup">
          <p>Total credits exceed 20! You may want to reconsider your course selection.</p>
          <button onClick={ handleRemainPopup}>Close</button>
        </div>


      )}
        </div>
    );
};


Coursename.propTypes={
    coursename:PropTypes.array.isRequired
}

export default Coursename;