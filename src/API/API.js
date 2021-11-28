import axios from "axios";

const BASE_URL = "http://localhost:8081/bird"

const http = axios.create({
    baseURL: {BASE_URL},
    headers: {
        'Content-type': 'application-json'
    }
});

export const getBird = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}
export const getBirdList = async (type = '', name = '', age = '') => {
    const rawResponse = await axios.get(`${BASE_URL}?type=${type}&name=${name}&age=${age}`)
    return rawResponse.data
}