import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  render() {
    let allRest = this.props.store.getState().restaurants.map((rest, index) => {
      return <Restaurant store={this.props.store} id={rest.id} key={index} restaurant={rest} />
    })
    return(
      <ul>
        {allRest}
      </ul>
    );
  }
};

export default Restaurants;
