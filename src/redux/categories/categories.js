const checkStatus = 'redux/categories/STATUS';
const initialState = []

//action
export const categoriesAction = () => (
 {
  type: checkStatus,
  payload : "Under construction"
 }
)

//reducer
export default categoriesReducer =(state = initialState, action) =>{
 switch(action.type){
  case checkStatus:
   return action.payload

  default:
   return state
 }
}

