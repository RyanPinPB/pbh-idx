import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.scss';
import Properties from '../Properties/Properties';

class Main extends Component {
  render() {
    let main = this.props.auth ? <Properties /> : <h2>Please log in</h2>;
    return main;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.authorized,
    userName: state.user.userName,
  };
};

export default connect(mapStateToProps)(Main);
