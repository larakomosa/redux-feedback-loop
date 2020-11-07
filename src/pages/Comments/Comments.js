import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    feedback: {
      comments: '',
    },
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      feedback: {
        [propertyName]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FEEDBACK', payload: this.state.feedback });
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
          <button type="submit" onClick={this.handleSubmit}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
