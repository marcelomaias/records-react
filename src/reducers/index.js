import { combineReducers } from 'redux'

import authReducer from './authReducer'
import errorsReducer from './errorsReducer'
import albumReducer from './albumReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  albums: albumReducer
})
