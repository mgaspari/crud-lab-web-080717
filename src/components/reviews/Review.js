import React, { Component } from 'react';

class Review extends Component {
  handleDelete = (event) => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.id
    })
  }
  render() {
    return (
      <div>
      <li>
        {this.props.review.comment}
      </li>
      <button onClick={this.handleDelete}>X</button>
    </div>
    );
  }
};

export default Review;
