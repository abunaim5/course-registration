import PropTypes from 'prop-types';
import { LuDollarSign } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course, handleSelectCourse }) => {
    const { name, credit, description, photo, price } = course;
    return (
        <div className='bg-white p-4 rounded-xl'>
            <div>
                <div className='mb-4'>
                    <img className='w-full' src={photo} alt="" />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>{name}</h3>
                <p className='text-sm text-gray-500 mb-5'>{description}</p>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-gray-500 text-xl'><LuDollarSign /></p>
                        <p className='font-medium text-gray-500'>Price: {price}</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <p className='text-gray-500 text-xl'><IoBookOutline /></p>
                        <p className='font-medium text-gray-500'>Credit: {credit}hr</p>
                    </div>
                </div>
                <button onClick={() => handleSelectCourse(course)} className='text-white text-lg font-semibold bg-blue-600 py-2 rounded-lg w-full mt-5'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
}

export default Course;