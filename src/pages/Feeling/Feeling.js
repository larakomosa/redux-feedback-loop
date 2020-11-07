import React, { Component } from 'react';

class Feeling extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <p>/feeling</p>
        <button type="submit" onClick={this.handleSubmit}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Feeling;
