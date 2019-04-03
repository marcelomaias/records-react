import { GET_ALBUMS, GET_ALBUM, ALBUM_LOADING } from '../actions/types'

const initialState = {
  albums: [],
  album: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ALBUM_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        loading: false
      }
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload,
        loading: false
      }
    default:
      return state
  }
}
