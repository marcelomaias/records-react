import axios from 'axios'

import { GET_ERRORS, GET_ALBUMS, GET_ALBUM, ALBUM_LOADING } from './types'

export const addAlbum = (albumData, history) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API}/albums`, albumData)
    .then(result => {
      history.push('/')
      // dispatch({
      //   type: ADD_ALBUM,
      //   payload: result.data
      // })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
export const getAlbums = () => dispatch => {
  dispatch(setLoading())
  axios
    .get(`${process.env.REACT_APP_API}/albums`)
    .then(res => {
      dispatch({
        type: GET_ALBUMS,
        payload: res.data
      })
    })
    .then(res =>
      dispatch({
        type: GET_ALBUM,
        payload: {}
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALBUMS,
        payload: []
      })
    )
}
export const getAlbum = id => dispatch => {
  dispatch(setLoading())
  axios
    .get(`${process.env.REACT_APP_API}/albums/${id}`)
    .then(res => {
      dispatch({
        type: GET_ALBUM,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ALBUM,
        payload: {}
      })
    )
}
export const deleteAlbum = (id, history) => dispatch => {
  axios
    .delete(`${process.env.REACT_APP_API}/albums/${id}`)
    .then(res => {
      history.push('/')
    })
    .catch(err =>
      dispatch({
        type: GET_ALBUM,
        payload: {}
      })
    )
}
export const editAlbum = (id, albumData, history) => dispatch => {
  axios
    .put(`${process.env.REACT_APP_API}/albums/${id}`, albumData)
    .then(res => {
      history.push(`/album/${id}`)
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setLoading = () => {
  return {
    type: ALBUM_LOADING
  }
}
