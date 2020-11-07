import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    feedback: {
      understanding: '1',
    },
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feedback: {
        understanding: changeEvent.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button triggered');
    this.props.dispatch({
      type: 'UNDERSTANDING',
      payload: this.state.feedback,
    });
    console.log(this.state.feedback);
    this.props.history.push('/support');
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
export default connect()(Understanding);
