import axios from 'axios'

export const getSubscribers = () => {
  return axios.get('https://boiling-dawn-71074.herokuapp.com/api/subscribers')
}