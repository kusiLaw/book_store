const ADD = 'redux/books/ADD';
const REMOVE = 'redux/books/REMOVE';
const initialState = [
  {
    id: '1',
    title: 'Java For Beginner',
    author: 'lawrence',
  },
  {
    id: '2',
    title: 'Python Deep Dive',
    author: 'lawrence',
  },
];

// action
const addNewBook = (book) => (
  {
    type: ADD,
    id: book.id,
    title: book.title,
    author: book.author,
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
          title: action.title,
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
