
import PropTypes from 'prop-types';

const Coursedetails = ({coursename}) => {
    // console.log(coursename)
    const{courseName}=coursename;
    return (
        <div>
            <h1 className=' font-serif  bg-slate-300 p-4 m-2 rounded-xl'>{courseName}</h1>
            <hr />
            
        </div>
       
    );
};

Coursedetails.propTypes= {
coursename:PropTypes.object.isRequired
}
export default Coursedetails;