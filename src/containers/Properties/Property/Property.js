import React, { Component } from 'react';
import './Property.scss';
import image from '../../../assets/images/properties/test.jpg';

class Property extends Component {
  render() {
    return (
      <div className='property-container'>
        <figure className='image-container'>
          <img className='image' src={image} alt='random' />
        </figure>
        <div className='price'>$700,000</div>
        <div className='address'>1994 Diamond St, Pacific Beach</div>
        <div className='beds'>2 bedrooms</div>
        <div className='baths'>2.5 bathrooms</div>
        <div className='squareFeet'>1192 sq. ft.</div>
      </div>
    );
  }
}

export default Property;
