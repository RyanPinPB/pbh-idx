import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Search.module.scss';
import * as actions from '../../store/actions/index';

class Search extends Component {
  locationChangeHandler = (e) => {
    const newLocation = e.target.value;
    console.log(newLocation);
    this.props.newLocation(newLocation);
  };

  bedsChangeHandler = (e) => {
    const newBeds = e.target.value;
    console.log(newBeds);
    this.props.newBeds(newBeds);
  };

  bathsChangeHandler = (e) => {
    const newBaths = e.target.value;
    console.log(newBaths);
    this.props.newBaths(newBaths);
  };

  priceChangeHandler = (e) => {
    const newPrice = e.target.value;
    console.log(newPrice);
    this.props.newPrice(newPrice);
  };

  render() {
    return (
      <div className={classes.Search}>
        <form action=''>
          <label htmlFor='location'>Location</label>
          <input
            value={this.props.searchCriteria.location}
            onChange={(e) => this.locationChangeHandler(e)}
            id='location'
            type='text'
          />
          <label htmlFor='bedrooms'>Bedrooms</label>
          <input
            value={this.props.searchCriteria.beds}
            onChange={(e) => this.bedsChangeHandler(e)}
            id='bedrooms'
            type='number'
          />
          <label htmlFor='bathrooms'>Bathrooms</label>
          <input
            value={this.props.searchCriteria.baths}
            onChange={(e) => this.bathsChangeHandler(e)}
            id='bathrooms'
            type='number'
          />
          <label htmlFor='price'>Price</label>
          <input
            value={this.props.searchCriteria.price}
            onChange={(e) => this.priceChangeHandler(e)}
            id='price'
            type='number'
          />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchCriteria: {
      location: state.search.searchCriteria.location,
      beds: state.search.searchCriteria.beds,
      baths: state.search.searchCriteria.baths,
      price: state.search.searchCriteria.price,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newLocation: (criteria) => dispatch(actions.newLocation(criteria)),
    newBeds: (criteria) => dispatch(actions.newBeds(criteria)),
    newBaths: (criteria) => dispatch(actions.newBaths(criteria)),
    newPrice: (criteria) => dispatch(actions.newPrice(criteria)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
