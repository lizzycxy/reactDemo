import { createStore, combineReducers,applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { count } from "./counter/reducers";
import { index, todos, filter } from "./todoList/reducer";
const store = createStore(
    combineReducers({
        count, index, todos, filter
    }),
    applyMiddleware(ReduxThunk)
)

export default store;