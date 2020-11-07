import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.history.push('/success');
  };

  render() {
    console.log(this.props.store.feedback);
    console.log(this.props.store.feedback.feeling);
    console.log(this.props.store.feedback.support);
    console.log(this.props.store.feedback.understanding);
    console.log(this.props.store.feedback.comments);
    return (
      <div>
        <h2>Feedback Review</h2>
        <p>Feelings: {this.props.store.feedback.feeling}</p>
        <p>Understanding: {this.props.store.feedback.understanding}</p>
        <p>Support: {this.props.store.feedback.support}</p>
        <p>Comments: {this.props.store.feedback.comments}</p>
        <button onClick={this.handleClickSubmit}>Submit</button>
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
