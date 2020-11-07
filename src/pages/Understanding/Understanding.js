import React, { Component } from 'react';

class Understanding extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/support');
  };
  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <p>/understanding</p>
        <button type="submit" onClick={this.handleSubmit}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Understanding;
