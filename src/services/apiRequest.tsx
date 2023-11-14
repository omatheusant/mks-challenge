import axios from "axios"

const url = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/'

export const ProductsApi = axios.create({
    baseURL: url
})


