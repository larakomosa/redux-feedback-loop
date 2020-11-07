import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('button triggered');
  //   this.props.history.push('/success');
  // };

  render() {
    console.log('console log', this.props.store.feedback);
    console.log('console log', this.props.store.feedback.feeling);
    return (
      <div>
        <h2>Review Your Feedback Below</h2>
      </div>
    );
  }
}

const storeToProps = (store) => ({
  store,
});

export default connect(storeToProps)(Review);
