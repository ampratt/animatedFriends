import { combineReducers } from 'redux'

// reducers
import { searchFriends, fetchFriends } from './friends';

const rootReducer = combineReducers({
  searchFriends,
  fetchFriends
})

export default rootReducer;