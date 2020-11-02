import React from 'react'
import {render} from '@testing-library/react'
import CountryCard from "./CountryCard";
import {countriesMock} from "../../../utils/tests/global-mocks"


const mockedCountryCardData = countriesMock[0]

describe("Country cards component", () => {
    it("should match snapshot", () => {
        const {asFragment} = render(<CountryCard data={mockedCountryCardData}/>)

        expect(asFragment()).toMatchSnapshot();
    })
})
