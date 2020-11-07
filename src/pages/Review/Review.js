import React, { Component } from 'react';

class Review extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/success');
  };

  render() {
    return (
      <div>
        <h2>Review</h2>
        <p>/review</p>
        <button type="submit" onClick={this.handleSubmit}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Review;
