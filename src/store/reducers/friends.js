import C from '../../constants';

const initialStateSearch = {
  searchField: ''
}

export const searchFriends = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case C.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    // return Object.assign({}, state, { searchField: action.payload })

    default:
      return state;
  }
}



const initialStateFriends = {
  isPending: false,
  friends: [],
  error: ''
}

export const fetchFriends = (state = initialStateFriends, action = {}) => {
  switch (action.type) {
    case C.FETCH_FRIENDS_PENDING:
      return { ...state, isPending: true }

    case C.FETCH_FRIENDS_SUCCESS:
      return { ...state, friends: action.payload, isPending: false }

    case C.FETCH_FRIENDS_FAILURE:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state;
  }
}