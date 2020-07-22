import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "./utility";

const initialState = {
    results: []
};

const deleteResultHandler = (state, action) => {
    const updatedArray = state.results.filter((d, index) => index !== action.payload);
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat({
                    id: new Date(),
                    name: action.payload.name,
                    age: action.payload.age
                })
            });

        case actionTypes.DELETE_RESULT:
            return deleteResultHandler(state, action);

        default:
            return state;
    }
};

export default reducer;
