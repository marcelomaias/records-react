import axios from 'axios'

const setAuthToken = token => {
  if (token) {
    // APPLY TOKEN TO EVERY REQUEST
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // DELETE AUTH HEADER
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
