import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.addFeedback(this.props.store.feedback);
    console.log(this.props.store.feedback);
  };

  addFeedback(feedback) {
    axios
      .post('./form', feedback)
      .then((result) => {
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
        <button onClick={this.handleSubmit}>Submit</button>
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
