import axios from "../utils/axios";
const baseUrl = 'http://localhost:3000';

export const scrapperService = {
    saveScrappedData,
    saveScrappedDataY
}

async function saveScrappedData (data) {    
    return await axios.post(`${baseUrl}/api/url`, data)
        .then(data => data)
        .catch(error => {
            console.log("ERROR : ", error)
        })
}

async function saveScrappedDataY (data) {
    return await axios.post(`${baseUrl}/api/url_y`, data)
        .then(data => data)
        .catch(error => {
            console.log("ERROR : ", error)
        })
}