export function selectBook(book) {
  // selectBook is an ActionCreator,
  // it needs to return an action,
  // an object with a type property
  // console.log('A book has been selected:', book.title);


  // usually have two values, a type and a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
