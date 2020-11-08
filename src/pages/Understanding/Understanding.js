import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      understanding: changeEvent.target.value, //sets value to targeted radio button value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.understanding === '') {
      //doesn't allow user to advance to next page without selecting radio button
      swal('Please select a number that indicates your understanding');
    } else {
      this.props.dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: parseInt(this.state.understanding), //sends data to index.js to be store locally
      });
      this.props.history.push('/support'); //sends user to next page
      console.log('state', this.state);
    }
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //allows user to back track and change answers
  };

  render() {
    return (
      <div>
        <h2>How well do you understand the material?</h2>
        <div className="container">
          <form>
            <ThumbDownIcon />
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
            <ThumbUpIcon />
          </form>
          <div className="buttons">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="small"
              onClick={this.handleBack}
            >
              &#x2190;Back
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
