import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.movies, action) {
    switch (action.type) {
        case types.LOAD_MOVIES_SUCCESS:{
            // console.log('REDUCER: LOAD MOVIE SUCCESS');
            return action.movies
        }
        case types.DELETE_MOVIE: {
            let newState = state.length ? [...state] : [];
            const indexToDelete = newState.findIndex( movie => movie.Title === action.payload.Title);
            newState.splice(indexToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}