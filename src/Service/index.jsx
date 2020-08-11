import axios from 'axios'

export default async function Service() {
    return await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3d2f97884c550b7e4e4bee8b99c164c1&certification_country=US&certification.lte=G&sort_by=popularity.desc')
} 