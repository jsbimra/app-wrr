import * as types from './actionTypes';

export function loading(status) {
    // console.log('ACTION: LOADING ', status);
    return {
        type: types.LOADING,
        status
    }
}