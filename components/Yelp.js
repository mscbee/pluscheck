import axios from 'axios';

const YELP_API_KEY = '8Quw4FZLUWl4QJHWcPA7HpDG93NH7rWZJIV0bt5VumuVHsHpQkk4sICdyAczRdneQxsdCh0nSkzzMORAI00AKRVljen2o3uD-QW_H2FsT6lzBVtpcgipNHjP5mkfXXYx'

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
})

const getHospitals = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'hospitals',
        ...userLocation,
      }
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          coords: business.coordinates
        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getHospitals
}