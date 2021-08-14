import { SET_COUNT } from "../actionType";

export function setCount(input) {
    console.log(input, "ini input");
    return {
        type: SET_COUNT,
        payload: input,
    };
}
