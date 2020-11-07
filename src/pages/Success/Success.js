import React, { Component } from 'react';
import swal from 'sweetalert';

class Submit extends Component {
  render() {
    return (
      <div>
        <h2>Submit</h2>
        <p>/submit</p>
        <button type="submit" onClick={this.handleSubmit}>
          Submit Feedback
        </button>
      </div>
    );
  }
}

export default Submit;
