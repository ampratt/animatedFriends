import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

// reducers
import { searchFriends, fetchFriends } from './friends';
// import { friends } from './friends'
// import { errors } from './errors'


const rootReducer = combineReducers({
  searchFriends,
  fetchFriends,
  // errors
})

export default rootReducer;