import { INCREMENT, DECREMENT } from "../action_types";

import { handleActions } from "redux-actions";

export const count = handleActions({
    [INCREMENT]: state => state + 1,
    [DECREMENT]: state => state - 1,
}, 0)