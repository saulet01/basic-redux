import * as actionTypes from "./actionsTypes";

export const saveResult = res => {
    // **** Can Transfrom Data HERE ******
    // console.log(res);
    return {
        type: actionTypes.STORE_RESULT,
        payload: res
    };
};

export const storeResult = res => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const counterState = getState();
            console.log(counterState);
            dispatch(saveResult(res));
        }, 3000);
    };
};

export const deleteResult = value => {
    return {
        type: actionTypes.DELETE_RESULT,
        payload: value
    };
};
