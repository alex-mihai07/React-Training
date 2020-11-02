import React, {useEffect, useState} from 'react'
import styles from './Country.module.css'
import { CountryCard } from "./index"
import axios from 'axios'

const URL = 'https://restcountries.eu/rest/v2';
const initialData = [];

const Country = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [country, setCountry] = useState('')
    const [region, setRegion] = useState('')
    const [countriesResult, setCountriesResult] = useState(initialData)
    const [error, setError] = useState('')

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const handleRegionChange = (e) => {
        setCountry('')
        setRegion(e.target.value)
    }

    const getCountries = async () => {
        setIsLoading(true)
        setError('')
        try{
            let params = ''
            if(region) {
                params = `/region/${region}`
            }
            if(country) {
                params = `/name/${country}`
            }
            const results = await axios.get(`${URL}${params}?fields=name;capital;region;population;flag`)

            setCountriesResult(results.data)
        }
        catch (exception)
        {
            setError(exception.message)
            setCountriesResult(initialData)
        }

        setIsLoading(false)
    }

    let timeout;
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() => getCountries(), 300)
    }, [country, region])

    const regions = [
        {value: '', label: 'Filter By Region'},
        {value: 'africa', label: 'Africa'},
        {value: 'america', label: 'America'},
        {value: 'Asia', label: 'Asia'},
        {value: 'Europe', label: 'Europe'},
        {value: 'Oceania', label: 'Oceania'},
    ]

    const RenderCountries = () => {
        if(isLoading) {
            return <div className={styles.loader}> </div>
        }

        if(error){
            return <div className={styles.error}>{error}</div>
        }
        return (
            countriesResult.map(countryResult =>
                <CountryCard
                    name={countryResult.name}
                    capital={countryResult.capital}
                    flagUrl={countryResult.flag}
                    population={countryResult.population}
                    region={countryResult.region}
            />)
        )
    }

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.inputs}>
                    <input
                        className={styles.left}
                        type='text' name='searchCountry'
                        placeholder='Search for a country'
                        onChange={handleCountryChange}
                        value={country}
                    />
                    <select
                        className={styles.right}
                        name="region"
                        onChange={handleRegionChange}
                        value={region}
                    >
                        {
                            regions.map(region => <option value={region.value}>{region.label}</option>)
                        }
                    </select>
                </div>
                <div className={styles.results}>
                    {RenderCountries()}
                </div>
            </div>
        </div>
    )
}

export default Country