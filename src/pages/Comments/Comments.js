import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {
  state = {
    comments: '',
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state.comments,
    });
    this.props.history.push('/review');
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <h2>Would you like to leave any comments?</h2>
        <form>
          <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            onChange={(event) => this.handleChangeFor('comments', event)}
          />
        </form>
        <div className="buttons">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleBack}
          >
            Back &#x2190;
          </Button>
          {'    '}
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleSubmit}
          >
            Next &#x2192;
          </Button>
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => {
  return {
    store,
  };
};

export default connect(putStoreOnProps)(Comments);
