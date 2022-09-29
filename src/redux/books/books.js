const ADD = 'redux/books/ADD';
const REMOVE = 'redux/books/REMOVE';
const initialState = [];


const addNewBook = (books) => (
  {
    type: ADD,
    payload: books,
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
      console.log(action.payload);
      // if (action.payload.length > 0){
      return {
        ...state,
        ...action.payload,
      };
      // }

    case REMOVE:
      // return state.filter((el) => el.id !== action.id);
      console.log(action.id);
    default:
      return state;
  }
};

export { addNewBook, removeBook };
export default bookReducer;
