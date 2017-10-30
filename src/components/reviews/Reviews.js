import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props.store.getState())
    let allReviews = this.props.store.getState().reviews.filter((review) => {
      return review.restId === this.props.restaurantIdid
    })
    let finRev = allReviews.map((review, index) => {
      return <Review key={index} review={review} store={this.props.store} id={review.id} />
    })
    return (
      <ul>
        {finRev}
      </ul>
    );
  }
};

export default Reviews;
