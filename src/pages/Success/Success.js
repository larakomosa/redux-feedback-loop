import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Success extends Component {
  handleSubmit = (event) => {
    this.props.dispatch({ type: 'START_OVER' });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Thank you for your Feedback!</h2>
        <button type="submit" onClick={this.handleSubmit}>
          Take a New Survey
        </button>
      </div>
    );
  }
}

export default connect()(Success);
