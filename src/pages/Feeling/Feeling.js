import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feeling: changeEvent.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.feeling === '') {
      swal('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_FEELING',
        payload: parseInt(this.state.feeling),
      });
      this.props.history.push('/understanding');
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <div className="container">
          <div className="row <RadioGroup row />">
            <div className="col-sm-12">
              <form>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="1"
                      checked={this.state.feeling === '1'}
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
                      checked={this.state.feeling === '2'}
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
                      checked={this.state.feeling === '3'}
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
                      checked={this.state.feeling === '4'}
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
                      checked={this.state.feeling === '5'}
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
export default connect()(Feeling);
