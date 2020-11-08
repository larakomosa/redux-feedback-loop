import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown'; //imports from Material UI to use elements

class Feeling extends Component {
  state = {
    //setting state
    feeling: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feeling: changeEvent.target.value,
    });
  }; //feeling value is changed to targeted radio button

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.feeling === '') {
      //doesn't allow user to advance to next page without selecting radio button
      swal('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_FEELING', //sending information to index.js to be stored locally
        payload: parseInt(this.state.feeling),
      });
      this.props.history.push('/understanding'); //moves user to next page
    }
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <div className="container">
          <form>
            <ThumbUpIcon />
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
            <ThumbDownIcon />
          </form>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
          >
            Next &#x2192;
          </Button>
        </div>
      </div>
    );
  }
}
export default connect()(Feeling);
