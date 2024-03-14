import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-3/4'>
                {
                    courses.map((course, idx) => <Course key={idx} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;