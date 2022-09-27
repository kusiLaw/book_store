
const ADD = 'redux/books/ADD'
const REMOVE = 'redux/books/REMOVE'
const initialState = []

//action
const addNewBook = (id, bookName, author) =>(
{ type: ADD, 
  id: id,
  book: bookName,
  author: author
 }
)

const removeBook = (id) =>( {
 type: REMOVE, 
 id : id 
})

//reducer
export default  bookReducer = (state =initialState , action) =>{
 switch(action.type){
  case ADD:
   return [
    ...state,
    {
     id : action.id,
     book: action.bookName,
     author: action.author
    }
   ];

   case REMOVE:
   return state.filter(el => el.id !== action.id);

   default:
    return initialState
 }
}

export {addNewBook, removeBook }