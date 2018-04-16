import { http } from './http'

export const fetchStats = id => http.get(`players/${id}`)
    
export const fetchWL = id => http.get(`players/${id}/wl?`)

const searchPlayer = name => http.get(`search?q=${name}`)

export default searchPlayer
