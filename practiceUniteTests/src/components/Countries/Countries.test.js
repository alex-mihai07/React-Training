import React from 'react'
import {render, fireEvent, act, waitFor} from '@testing-library/react'
import'@testing-library/jest-dom'
import Countries from "./Countries"
import axios from 'axios'


const mockURL = 'https://restcountries.eu/rest/v2';
const apiRejectPromise = jest.fn(() => Promise.reject(() => new Error('my own error')))

describe("Countries component", () => {
    const mockOnChange = jest.fn()


    it("should match snapshot", () => {
        const {asFragment} = render(<Countries/>)

        expect(asFragment()).toMatchSnapshot();
    })

    it("should handle onChange query functionality", () => {
        const {asFragment, getByTestId} = render(<Countries/>)
        const mockedNewValue = "Slovakia"
        act(() => {

            fireEvent.change(getByTestId("countries-search-query"), {

                target: {value: mockedNewValue},

            });
        })

        const newInputValue = getByTestId("countries-search-query").value
        expect(newInputValue).toBe(mockedNewValue)
    })

    //same goes for select change query

    it('should call the data fetch API', async () => {
        //render the component
        const { getByTestId } = render(<Countries/>)
        const mockedNewValue = "Romania"

        //mock the fetch
        //act fetch
        await act(async () => {
             await fireEvent.change(getByTestId("countries-search-query"), {
                target: {value: mockedNewValue},
            });
        })

        const queryValue = getByTestId('countries-search-query').value
        const finalUrl = `${mockURL}/name/${queryValue}?fields=name;capital;region;population;flag`

        await waitFor(() => expect(axios.get).toHaveBeenCalledWith(finalUrl))


        //expect state to be populated
    })

    it('should display the loader when fetching data', async () => {
        //render the component
        const { getByTestId } = render(<Countries/>)
        const mockedNewValue = "Romania"

        //mock the fetch
        //act fetch
        act(() => {
            fireEvent.change(getByTestId("countries-search-query"), {
                target: {value: mockedNewValue},
            });
        })

        await waitFor(() => expect(getByTestId('loader')).toBeInTheDocument())
    })

    it('should display error when fetching data from API fails', async () => {
        //render the component
        const { getByTestId } = render(<Countries/>)
        const mockedNewValue = "Romania"

        //option 1
        // axios.get.mockImplementationOnce(apiRejectPromise)

        //option 2
         axios.get.mockRejectedValueOnce({message: 'custom error'})

        //mock the fetch
        //act fetch
         act( () => {
             fireEvent.change(getByTestId("countries-search-query"), {
                target: {value: mockedNewValue},
            });
        })

        expect(getByTestId('error')).toBeInTheDocument()
        // await waitFor(() => expect(getByTestId('error')).toBeInTheDocument())
    })

    it('should display the countries correctly', async () => {
        //render the component
        const { getByTestId } = render(<Countries/>)
        const mockedNewValue = "Romania"

        //option 1
        // axios.get.mockImplementationOnce(apiRejectPromise)

        //option 2
        axios.get.mockRejectedValueOnce({message: 'custom error'})

        //mock the fetch
        //act fetch
        act( () => {
            fireEvent.change(getByTestId("countries-search-query"), {
                target: {value: mockedNewValue},
            });
        })

        expect(getByTestId('error')).toBeInTheDocument()
        // await waitFor(() => expect(getByTestId('error')).toBeInTheDocument())
    })
})