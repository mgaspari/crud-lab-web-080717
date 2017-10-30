import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    name: ""
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_SPOT",
      restaurant: {
        name: this.state.name
      }
    })
  }

  textHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text"
            value={this.state.name}
            onChange={this.textHandler}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
