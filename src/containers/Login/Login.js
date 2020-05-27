import React, { Component } from 'react';

import './Login.scss';

class Login extends Component {
  render() {
    let content = (
      <div className='login-form'>
        <label htmlFor='username'>Username</label>
        <input
          value={this.props.value}
          onChange={(e) => {
            this.props.changed(e);
          }}
          id='username'
          type='text'
        />
        <label htmlFor='password'>Password</label>
        <input id='password' type='text' />
        <button
          type='submit'
          disabled={!this.props.startedTyping}
          onClick={(e) => {
            this.props.clicked(e);
          }}
        >
          Log In
        </button>
      </div>
    );
    return content;
  }
}

export default Login;
