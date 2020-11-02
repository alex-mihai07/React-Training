import React, {useEffect, useState} from "react";
import CountryCard from './CountryCard/CountryCard'
import styles from './Countries.module.css'
import axios from "axios";

const URL = 'https://restcountries.eu/rest/v2';
const initialData = [];

const Countries = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
    const [data, setData] = useState(initialData);
    const [error, setError] = useState('');

    const handleOnChangeQuery = (event) => {
        setQuery(event.target.value);
    };

    const handleOnChangeRegion = (event) => {
        setRegion(event.target.value)
        setQuery('')
    };

    const getCountries = async () => {
        setIsLoading(true);
        setError('')
        try {
            let criteria = 'all';

            if (region.length) {
                criteria = `region/${region}`
            } else if (query.length) {
                criteria = `name/${query}`
            }

            const results = await axios.get(`${URL}/${criteria}?fields=name;capital;region;population;flag`);
            setData(results.data)
        }
        catch (e) {
            setError(e.message)
            setData([])
        }
        setIsLoading(false)
    };

    let timeout;
    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            getCountries()
        },  300);
    }, [query, region]);

    const CountriesResults = () => {
        if (isLoading) {
            return <div data-testid='loader' className={styles.loader}/>
        }

        if (error) {
            return <div data-testid='error'>{error}</div>
        }

        return data.map((item, i) => <CountryCard key={i} data={item}/>);
    };

    return (<div className={styles.wrapper}>
        <div className={styles.filters}>
            <input type="text" value={query} onChange={handleOnChangeQuery} data-testid="countries-search-query" placeholder="Search for a country..."/>
            <select name="region" value={region} onChange={handleOnChangeRegion} className={styles.selectFilter} placeholder="Filter by region">
                <option value="">Filter by region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div className={styles.results}>
            <CountriesResults />
        </div>
    </div>)
}

export default Countries
