import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../Login/Login';
import './Header.scss';
import * as actions from '../../store/actions/user';

class Header extends Component {
  state = {
    authorized: this.props.auth,
    userName: '',
    startedTyping: false,
  };

  inputChangedHandler = (e) => {
    this.setState({ userName: e.target.value, startedTyping: true });
  };

  loginRequest() {
    const name = this.state.userName;
    this.props.loginRequest(name);
  }

  render() {
    let userName = this.props.userName;
    let headerContent = this.props.auth ? (
      <div className='logout'>
        <h1>Hello {userName}</h1>
        <button
          onClick={() => {
            this.props.logoutRequest();
          }}
        >
          Log Out
        </button>
      </div>
    ) : (
      <Login
        value={this.state.userName}
        userName={this.state.userName}
        changed={(e) => {
          this.inputChangedHandler(e);
        }}
        clicked={() => {
          this.loginRequest();
        }}
        startedTyping={this.state.startedTyping}
      />
    );

    return <header>{headerContent}</header>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.authorized,
    userName: state.user.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (name) => dispatch(actions.loginRequest(name)),
    logoutRequest: () => dispatch(actions.logoutRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
