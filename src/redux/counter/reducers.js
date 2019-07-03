import { INCREMENT, DECREMENT } from "../action_types";

import { handleActions } from "redux-actions";

export const counter = handleActions({
    [INCREMENT]: state => state - 0 + 1,
    [DECREMENT]: state => state - 1
})