import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';

class Support extends Component {
  state = {
    support: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      support: changeEvent.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    if (this.state.support === '') {
      swal('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_SUPPORT',
        payload: parseInt(this.state.support),
      });
      console.log(this.state);
      this.props.history.push('/comments');
    }
  };

  render() {
    return (
      <div>
        <h2>How well are you being support?</h2>
        <div className="container">
          <form>
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.support === '1'}
                onChange={this.handleOptionChange}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.support === '2'}
                onChange={this.handleOptionChange}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                value="3"
                checked={this.state.support === '3'}
                onChange={this.handleOptionChange}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                value="4"
                checked={this.state.support === '4'}
                onChange={this.handleOptionChange}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                value="5"
                checked={this.state.support === '5'}
                onChange={this.handleOptionChange}
              />
              5
            </label>
          </form>
          <Button
            variant="contained"
            color="Primary"
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
export default connect()(Support);
