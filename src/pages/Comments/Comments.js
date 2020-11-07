import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

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
    if (this.state.comments === '') {
      swal('Please select a number that indicates how you are feeling');
    } else {
      event.preventDefault();
      this.props.dispatch({
        type: 'ADD_COMMENTS',
        payload: this.state.comments,
      });
      this.props.history.push('/review');
    }
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
          <button type="submit" onClick={this.handleSubmit}>
            Next
          </button>
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
