import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';

class Review extends Component {
  handleSubmit = (event) => {
    swal('You feedback has been submitted!');
    event.preventDefault();
    this.addFeedback(this.props.store.feedback);
    console.log(this.props.store.feedback);
  };

  addFeedback(feedback) {
    //axios call to post data to server
    axios
      .post('./form', feedback)
      .then((response) => {
        this.props.history.push('/success'); //moves user to success page
      })
      .catch((error) => {
        alert(`Submission Error`);
        console.log(error);
      });
  }

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/comments'); //allows user to backtrack and change answers
  };

  render() {
    return (
      //accessing store to provide a review of all info gathered and stored locally in index.js
      <div>
        .<h2>Feedback Review</h2>
        <p>Feeling: {this.props.store.feedback.feeling}</p>
        <p>Understanding: {this.props.store.feedback.understanding}</p>
        <p>Support: {this.props.store.feedback.support}</p>
        <p>Comments: {this.props.store.feedback.comments}</p>
        <div className="buttons">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleBack}
          >
            &#x2190;Back
          </Button>
          {'  '}
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleSubmit}
          >
            Submit &#x2713;
          </Button>
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => {
  //access to store data in index.js
  return {
    store,
  };
};

export default connect(putStoreOnProps)(Review);
