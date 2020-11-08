import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Success extends Component {
  startOver = (event) => {
    this.props.dispatch({ type: 'START_OVER' });
    this.props.history.push('/');
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
          onClick={this.startOver}
        >
          Take a New Survey
        </Button>
      </div>
    );
  }
}

export default connect()(Success);
