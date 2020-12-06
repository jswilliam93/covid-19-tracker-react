import axios from 'axios'

export const getCases = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/case`, {
            validateStatus: () => true
        });
        return result.data;
    } catch (error) {
        return {error: 'Something went wrong.'}
    }
};


export const addCase = async (newCase) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/case/create`, newCase, {
            validateStatus: () => true
        });
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
