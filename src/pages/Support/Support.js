import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/understanding');
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
                checked={this.state.support === '1'}
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
                checked={this.state.support === '2'}
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
                checked={this.state.support === '3'}
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
                checked={this.state.support === '4'}
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
                checked={this.state.support === '5'}
                onChange={this.handleOptionChange}
              />
            </label>
            &#x1F44D;
          </form>
          <div className="buttons">
            <Button
              className="spacing"
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
              className="spacing"
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
export default connect()(Support);
