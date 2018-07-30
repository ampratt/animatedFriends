import C from '../constants';

export const setSearchField = (text) => ({
  type: C.CHANGE_SEARCH_FIELD,
  payload: text
});


// export const fetchFriends = (dispatch) => {
export const fetchFriends = () => (dispatch) => {
  dispatch({ type: C.FETCH_FRIENDS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => dispatch({ type: C.FETCH_FRIENDS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: C.FETCH_FRIENDS_FAILURE, payload: error }));
}