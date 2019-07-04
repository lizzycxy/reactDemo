import { createAction } from "redux-actions";
import { INCREMENT, DECREMENT } from "../action_types";

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

