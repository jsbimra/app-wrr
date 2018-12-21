
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {
    createListItems() {
        return this.props.users.map((user, i) => {
            return (
                <li 
                    key={user.id} 
                    
                ><a href="#" onClick={(e) => {
                    e.preventDefault(); 
                    this.props.selectUser(user);
                }}
                >{user.first}</a> {user.last}</li>
            )
        });
    }

    render() {
        return (
            <ul>
               {this.createListItems()}
            </ul>
        )
    }
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser : selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);