import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      understanding: changeEvent.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    if (this.state.understanding === '') {
      swal('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: parseInt(this.state.understanding),
      });
      this.props.history.push('/support');
      console.log('state', this.state);
    }
  };

  render() {
    console.log('value', this.state);
    return (
      <div>
        <h2>How well did you understand the Material?</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="1"
                      checked={this.state.understanding === '1'}
                      onChange={this.handleOptionChange}
                    />
                    1
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="2"
                      checked={this.state.understanding === '2'}
                      onChange={this.handleOptionChange}
                    />
                    2
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="3"
                      checked={this.state.understanding === '3'}
                      onChange={this.handleOptionChange}
                    />
                    3
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="4"
                      checked={this.state.understanding === '4'}
                      onChange={this.handleOptionChange}
                    />
                    4
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="5"
                      checked={this.state.understanding === '5'}
                      onChange={this.handleOptionChange}
                    />
                    5
                  </label>
                </div>
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
        </div>
      </div>
    );
  }
}
export default connect()(Understanding);
