import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }
  changeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  submitHandler = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "REVIEW_SPOT",
      review: {
        comment: this.state.text,
        resId: this.props.id
      }
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.text} onChange={this.changeHandler}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
