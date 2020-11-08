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
        <h2>Thank you for your Feedback!</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Take a New Survey
        </Button>
        <div className="admin">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleAdmin}
          >
            Admin
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(Success);
