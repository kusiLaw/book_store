const ADD = 'redux/books/ADD';
const REMOVE = 'redux/books/REMOVE';
const initialState = [];

// action
const addNewBook = (id, bookName, author) => (
  {
    type: ADD,
    id,
    book: bookName,
    author,
  }
);

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          book: action.bookName,
          author: action.author,
        },
      ];

    case REMOVE:
      return state.filter((el) => el.id !== action.id);

    default:
      return initialState;
  }
};

export { addNewBook, removeBook };
export default bookReducer;
