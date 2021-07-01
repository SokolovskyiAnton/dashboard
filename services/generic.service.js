import axios from './request.service';
const BASE_URL = 'https://young-sea-53879.herokuapp.com/api/v1'
export const request = async ({ url, method }, data = {}) => {
    const response = await axios[method](`${BASE_URL}/${url}`, data)
    return response.data
}


