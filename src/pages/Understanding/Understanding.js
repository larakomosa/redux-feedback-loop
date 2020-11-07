import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
      swal('Please select a number that indicates your understanding');
    } else {
      this.props.dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: parseInt(this.state.understanding),
      });
      this.props.history.push('/support');
      console.log('state', this.state);
    }
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>How well do you understand the material?</h2>
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
                checked={this.state.understanding === '1'}
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
                checked={this.state.understanding === '2'}
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
                checked={this.state.understanding === '3'}
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
                checked={this.state.understanding === '4'}
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
                checked={this.state.understanding === '5'}
                onChange={this.handleOptionChange}
              />
            </label>
            &#x1F44D;
          </form>
          <div className="buttons">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="small"
              onClick={this.handleBack}
            >
              Back &#x2190;
            </Button>
            {'    '}
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
      </div>
    );
  }
}

export default connect()(Understanding);
