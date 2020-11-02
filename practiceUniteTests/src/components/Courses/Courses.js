import React, {useState} from "react";
import styles from './Courses.module.css'
import { CourseList, InputControl } from './../Courses'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const addCourse = (title) => {
        setCourses([...courses, title]);
    }

    const resetCourses = () => {
        setCourses([])
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Add Courses</h1>
            <InputControl addHandler={addCourse} resetHandler={resetCourses} />
            <CourseList courses={courses} />
        </div>
    )
};

export default Courses
