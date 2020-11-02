import React from "react";
import {NavLink} from 'react-router-dom'
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink  to="/">Home</NavLink >
                </li>
                <li>
                    <NavLink  to={`/homework3`} activeStyles={styles.active}>Homework 3</NavLink >
                </li>
                <li>
                    <NavLink  to={`/homework5`} activeStyles={styles.active}>Homework 5</NavLink >
                </li>
            </ul>
        </nav>
    )
}

export default Navigation