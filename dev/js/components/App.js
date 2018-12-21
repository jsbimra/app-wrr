import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import MovieList from '../containers/movies-list';
import DetailModal from '../containers/detail-modal';

const App = () => (
    <div className="main-wrapper">
        <div className="users-container hide">
            <h2>Username List;</h2>
            <UserList />
            <hr />
            <h2>User Details: </h2>
            <UserDetail />
        </div>

        <div className="movies-container">
            <MovieList />
        </div>

        <div className="modal-wrapper">
            <DetailModal />
        </div>

    </div>
);

export default App;