import { createAction } from "redux-actions";
import { INDEX_INCREMENT, ADD_TODO, TOGGLE, COMPLETED_TODO } from "../action_types";

export const indexIncrement = createAction(INDEX_INCREMENT);
export const addTodo = createAction(ADD_TODO);
export const toggle = createAction(TOGGLE);
export const completedTodo = createAction(COMPLETED_TODO);

export const addTodoTrans = (text) => (dispatch, getState) => {
    dispatch(addTodo({
        id: getState().index, text
    }));
    dispatch(indexIncrement());
}

