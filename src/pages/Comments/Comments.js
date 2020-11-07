import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

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

  render() {
    return (
      <div>
        <h2>Would you like to leave any comments?</h2>
        <form>
          <label>Comments</label>
          <input
            type="text"
            onChange={(event) => this.handleChangeFor('comments', event)}
          />
          <Button
            variant="contained"
            color="Primary"
            type="submit"
            size="small"
            onClick={this.handleSubmit}
          >
            Next &#x2192;
          </Button>
        </form>
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
