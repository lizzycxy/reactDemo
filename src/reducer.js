import { combineReducers,applyMiddleware,createStore } from "redux";
import ReduxThunk from "redux-thunk"
import { data } from "./redux/data.redux";
// 合并 reducer 

const store = createStore(
    combineReducers({
        data
    }),
    applyMiddleware(ReduxThunk)
);

export default store;