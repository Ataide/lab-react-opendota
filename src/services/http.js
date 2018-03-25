import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.opendota.com/api/'
})

export default http