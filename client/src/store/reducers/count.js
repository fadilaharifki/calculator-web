import { SET_COUNT } from "../actionType";

const initialState = {
    dataCount: "",
};

export default function count(state = initialState, action) {
    const { type, payload } = action;
    if (type === SET_COUNT) {
        return { ...state, dataCount: payload };
    }

    return state;
}
