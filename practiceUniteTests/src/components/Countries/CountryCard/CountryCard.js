import React from "react";
import PropTypes from "prop-types";
import styles from './CountryCard.module.css'

const CountryCard = (props) => {
    const { data } = props;

    return <div className={styles.card}>
        <img src={data.flag} alt={data.name} className={styles.cardImg}/>
        <strong className={styles.countryName}>{data.name}</strong>
        <div className={styles.details}>
            <div>
                <strong>Population:</strong> {data.population}
            </div>
            <div>
                <strong>Region:</strong> {data.region}
            </div>
            <div>
                <strong>Capital:</strong> {data.capital}
            </div>
        </div>
    </div>
};

CountryCard.propTypes = {
    data: PropTypes.shape({
        flag: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
    })
}

export default CountryCard
