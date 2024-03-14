import PropTypes from 'prop-types';
import Course from "../Course/Course";
import CourseSelect from "../CourseSelect/CourseSelect";

const Courses = ({courses, handleSelectCourse}) => {
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-12 my-8 gap-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-12 md:col-span-8 lg:col-span-9'>
                {
                    courses.map((course, idx) => <Course
                        key={idx}
                        course={course}
                        handleSelectCourse={handleSelectCourse}
                    ></Course>)
                }
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
                <CourseSelect></CourseSelect>
            </div>
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
}

export default Courses;