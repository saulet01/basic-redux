import * as actionTypes from "../actions";

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    name: action.payload.name,
                    age: action.payload.age
                })
            };

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((d, index) => index !== action.payload);

            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
};

export default reducer;