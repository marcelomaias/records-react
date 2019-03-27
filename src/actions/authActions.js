import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utilities/setAuthToken'
import { GET_ERRORS, SET_CURRENT_USER } from './types'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/users', userData)
    .then(result => {
      history.push('/login')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const loginUser = userData => dispatch => {
  axios
    .post('/users/login', userData)
    .then(res => {
      // SAVE TOKEN TO LOCAL STORAGE
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      // SET TOKEN TO AUTH HEADER
      setAuthToken(token)
      // DECODE TOKEN TO GET USER DATA
      const decodedToken = jwt_decode(token)
      // SET CURRENT USER
      dispatch(setCurrentUser(decodedToken))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setCurrentUser = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  }
}

export const logOut = () => dispatch => {
  // REMOVE TOKEN FROM LOCALSTORAGE
  localStorage.removeItem('jwtToken')
  // REMOVE AUTH HEADER FOR FUTURE REQUESTS
  setAuthToken(false)
  // SET USER TO {}, WHICH WILL SET isAUTHENTICATED TO FALSE
  dispatch(setCurrentUser({}))
}
