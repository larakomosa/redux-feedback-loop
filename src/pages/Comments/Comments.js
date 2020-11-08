import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {
  state = {
    comments: '',
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value, //sets value of comments to what user inputs in comments text box
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state.comments, //sends data to index.js to be stored locally
    });
    this.props.history.push('/review');
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/support'); //allows user to backtrack and change answers
  };

  render() {
    return (
      <div>
        <h2>Would you like to leave any comments?</h2>
        <form>
          <TextField
            className="textField"
            id="outlined-basic"
            variant="outlined"
            margin="normal"
            size="medium"
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
            &#x2190; Back
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

export default connect()(Comments);
