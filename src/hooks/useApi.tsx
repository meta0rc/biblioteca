import axios from "axios";

const api = axios.create({
    baseURL: 'https://openlibrary.org/isbn/'
})

export const useApi = () => ({
    
    registerDonation: async (isbn: string) => {
        
        const response = await api.get(`/${isbn}.json`)

        return response
    }

})