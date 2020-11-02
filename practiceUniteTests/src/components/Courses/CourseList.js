import React from "react";

const CourseList = (props) => {
    const { courses } = props

    return (
        <ul>
            {courses.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}

export default CourseList
