import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Success extends Component {
  handleSubmit = (event) => {
    this.props.dispatch({ type: 'START_OVER' });
    this.props.history.push('/');
  };

  handleAdmin = (event) => {
    this.props.history.push('/admin');
  };

  render() {
    return (
      <div>
        <h3>Thank you for your Feedback!</h3>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="large"
          onClick={this.handleSubmit}
        >
          Take a New Survey
        </Button>
      </div>
    );
  }
}

export default connect()(Success);
