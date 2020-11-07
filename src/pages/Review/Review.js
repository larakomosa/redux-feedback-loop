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
    axios
      .post('./form', feedback)
      .then((response) => {
        console.log('Final Form Added!');
        this.props.history.push('/success');
      })
      .catch((error) => {
        alert(`Posting Error`);
        console.log('Error Posting', error);
      });
  }

  render() {
    // console.log(this.props.store.feedback);
    // console.log(this.props.store.feedback.feeling);
    // console.log(this.props.store.feedback.support);
    // console.log(this.props.store.feedback.understanding);
    // console.log(this.props.store.feedback.comments);
    return (
      <div>
        <h2>Feedback Review</h2>
        <p>Feelings: {this.props.store.feedback.feeling}</p>
        <p>Understanding: {this.props.store.feedback.understanding}</p>
        <p>Support: {this.props.store.feedback.support}</p>
        <p>Comments: {this.props.store.feedback.comments}</p>
        <Button
          variant="contained"
          color="Primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Submit &#x2713;
        </Button>
      </div>
    );
  }
}

const putStoreOnProps = (store) => {
  return {
    store,
  };
};

export default connect(putStoreOnProps)(Review);
