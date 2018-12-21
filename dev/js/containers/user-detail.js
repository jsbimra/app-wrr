import React, {Component} from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render (){
        // console.log(this.props.user);
        
        if(!this.props.user) {

            return (<h5>Select a user...</h5>)
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} height="180px" />
                <h3>{this.props.user.first} {this.props.user.last}</h3>
                <h3>{this.props.user.age}</h3>
                <p>{this.props.user.description}</p>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);