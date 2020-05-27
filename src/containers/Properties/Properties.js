import React, { Component } from 'react';
import './Properties.scss';
import Property from './Property/Property';

class Properties extends Component {
  render() {
    return (
      <section className='properties'>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </section>
    );
  }
}

export default Properties;
