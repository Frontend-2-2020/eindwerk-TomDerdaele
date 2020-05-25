import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";


const rootReducer = combineReducers({
posts: postReducer,
auth: authReducer,
user: userReducer,
error: errorReducer
})

export default rootReducer