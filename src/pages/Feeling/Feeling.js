import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
          <form>
            &#128078;
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="1"
                labelPlacement="top"
                type="radio"
                value="1"
                checked={this.state.feeling === '1'}
                onChange={this.handleOptionChange}
              />
            </label>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="2"
                labelPlacement="top"
                type="radio"
                value="2"
                checked={this.state.feeling === '2'}
                onChange={this.handleOptionChange}
              />
            </label>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="3"
                labelPlacement="top"
                type="radio"
                value="3"
                checked={this.state.feeling === '3'}
                onChange={this.handleOptionChange}
              />
            </label>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="4"
                labelPlacement="top"
                type="radio"
                value="4"
                checked={this.state.feeling === '4'}
                onChange={this.handleOptionChange}
              />
            </label>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="5"
                labelPlacement="top"
                type="radio"
                value="5"
                checked={this.state.feeling === '5'}
                onChange={this.handleOptionChange}
              />
            </label>
            &#x1F44D;
          </form>
          <Button
            variant="outlined"
            color="primary"
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
export default connect()(Feeling);
