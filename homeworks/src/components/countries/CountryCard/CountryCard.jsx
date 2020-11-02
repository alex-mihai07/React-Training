import React from "react";
import styles from './CountryCard.module.css'
import PropTypes from "prop-types";

const CountryCard = (props) => {
    const {name, population, region, capital, flagUrl} = props

    return (
            <div className={styles.box}>
                <img src={flagUrl}/>
                <div>
                    <h2>{name}</h2>
                    <p><span className={styles.bold}>Population:</span> {population}</p>
                    <p><span className={styles.bold}>Region:</span> {region}</p>
                    <p><span className={styles.bold}>Capital:</span> {capital}</p>
                </div>
            </div>
    )
}

CountryCard.propTypes = {
    name: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
    flagUrl: PropTypes.string,
}

export default CountryCard