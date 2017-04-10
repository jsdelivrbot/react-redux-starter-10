// state, actions
// State argument is not application state,
// only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      // always return fresh object
      // DO NOT
      // state.title = book.title
      // return state
  }
  return state;
}
