import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelectCourse = (course) =>{
      console.log(course)
    }

  return (
    <>
      <Header></Header>
      <Courses
        courses={courses}
        handleSelectCourse={handleSelectCourse}
      ></Courses>
    </>
  )
}

export default App
