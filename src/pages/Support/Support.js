import React, { Component } from 'react';

class Support extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/comments');
  };
  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <p>/support</p>
        <button type="submit" onClick={this.handleSubmit}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Support;
