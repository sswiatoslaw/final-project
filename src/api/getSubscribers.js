import axios from 'axios'

export const getSubscribers = async () => {
  return await axios.get('https://boiling-dawn-71074.herokuapp.com/api/subscribers')
}