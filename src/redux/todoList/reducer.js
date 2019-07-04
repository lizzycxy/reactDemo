import { handleActions } from "redux-actions";
import { INDEX_INCREMENT, ADD_TODO, TOGGLE, COMPLETED_TODO } from "../action_types";

export const index = handleActions({
    [INDEX_INCREMENT]: state => state + 1
}, 3)

const initTodos = [{
    id: 0,
    text: 'A meeting',
    completed: false
}, {
    id: 1,
    text: 'Eat Breakfast',
    completed: true
}, {
    id: 2,
    text: 'Read Document',
    completed: false
}]

export const todos = handleActions({
    [ADD_TODO]: (state, { payload }) => (
        [...state, {
            id: payload.id,
            text: payload.text,
            completed: false
        }]
    ),
    [COMPLETED_TODO]: (state, { payload }) => (
        state.map(item => {
            if (item.id === payload) {
                return { ...item, completed: !item.completed }
            }
            return item;
        })
    )
}, initTodos)

export const filter = handleActions({
    [TOGGLE]: (state, { payload }) => payload
}, 'All')

