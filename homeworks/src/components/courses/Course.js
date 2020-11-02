import React, { useState } from 'react'
import styles from './Course.module.css'

const Course = () => {
    const [courses, setCourses] = useState([])
    const [course, setCourse] = useState('');

    const handleAddCoursesClick = (e) => {
        e.preventDefault()
        setCourses([...courses, course])
    }

    const handleReset = (e) => {
        e.preventDefault()
        setCourses([])
    }

    return (<div>
        <h1 className={styles.h1}>Add courses</h1>
        <div className={styles.form}>
            <input type="text" id="course" onChange={(e) => setCourse(e.target.value)}/>
            <div className={styles.buttonsGroup}>
                <button id="addCourse" onClick={handleAddCoursesClick} value={course}>Add Course</button>
                <button id="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
        <div className={styles.coursesList}>
            <ul>
            {
                courses.map(course =>
                    <li key={course}>Course name: {course} !!</li>
                )
            }
            </ul>
        </div>
    </div>)
}

export default Course