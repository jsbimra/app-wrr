import { combineReducers } from 'redux';
import LoadingReducer from './loading-reducer';
import UserReducer from './reducer-user';
import ActiveUserReducer from './reducer-active-user';
import MovieReducer from './movies-reducer';
import DetailModalData from './detail-modal-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    movies: MovieReducer,
    loadingStatus: LoadingReducer,
    modalData: DetailModalData,
});

export default allReducers;