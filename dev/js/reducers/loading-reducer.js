import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.loadingStatus, action) => {
    switch (action.type) {
        case types.LOADING: {
            // console.log('REDUCER: LOADING ', action);
            return action.status;
        }
        default: 
            return state;
    }
}