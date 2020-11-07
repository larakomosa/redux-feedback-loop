import React, { Component } from 'react';

class Comments extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/review');
  };
  render() {
    return (
      <div>
        <h2>Please leave additional comments here!</h2>
        <p>/feeling</p>
        <button type="submit" onClick={this.handleSubmit}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Comments;
