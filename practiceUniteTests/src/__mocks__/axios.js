import {countriesMock} from "../utils/tests/global-mocks";

const axios = {
    get: jest.fn().mockResolvedValue({
        data: [
            ...countriesMock
        ]
    })
}

export default axios