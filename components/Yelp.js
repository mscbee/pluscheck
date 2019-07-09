import axios from 'axios';

const YELP_API_KEY = // {API_KEY_REMOVED_FOR_SECURITY}

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
})

const getHospitals = () => {
  return api
    .get('/categories/', {
      params: {
        alias: hospitals,
        locale: 'en_GB'
      }
    })
    .then(res =>
      res.data.categories.map(category => {
        return {
          name: category.title
        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getHospitals
}