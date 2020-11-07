import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feedback: {
      feeling: '1',
    },
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feedback: {
        feeling: changeEvent.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.dispatch({
      type: 'FEELING',
      payload: this.state.feedback,
    });
    console.log(this.state.feedback);
    this.props.history.push('/understanding');
  };

  render() {
    console.log('value', this.state);
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <div className="container">
          <div className="row">
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
              <button type="submit" onClick={this.handleSubmit}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Feeling);
