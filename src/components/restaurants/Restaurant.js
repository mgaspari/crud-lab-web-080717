import React, { Component } from 'react';
import ReviewInput from "../reviews/ReviewInput"
import Reviews from "../reviews/Reviews"
class Restaurant extends Component {
  handleDelete = (event) => {
    this.props.store.dispatch({
      type: "DELETE_SPOT",
      id: this.props.id
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <li>
          {this.props.restaurant.name}
        </li>
        <button onClick={this.handleDelete}>X</button>
        <ReviewInput store={this.props.store} id={this.props.id} />
        <p>Reviews:</p>
        <Reviews store={this.props.store} restaurantId={this.props.id} />
      </div>
    );
  }
};

export default Restaurant;
