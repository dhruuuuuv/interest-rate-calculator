import axios from 'axios'

export const calculate = payload => {
  return axios.post("/calculate/", payload)
}