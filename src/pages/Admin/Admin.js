import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedbackListItem from '../AdminItem/AdminItem';
import { Table } from '@material-ui/core';

class Admin extends Component {
  state = {
    feedbackList: [],
  };

  componentDidMount() {
    this.getImages(); //ready on page load. (comparable to document on ready Jquery function)
  }

  getImages = () => {
    // axios call retrieves galleryList data from server
    axios({
      method: 'GET',
      url: '/form',
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          feedbackList: response.data, //updates state with data retrieved
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.', //indicated error
        });
      });
  };

  render() {
    const feedbackArray = this.state.feedbackList.map((item, index) => {
      return (
        <tr>
          <FeedbackListItem key={index} list={item} />
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <th>ID</th>
          <th>Feeling</th>
          <th>Understanding</th>
          <th>Support</th>
          <th>Comments</th>
        </thead>
        <tbody>{feedbackArray}</tbody>;
      </Table>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Admin);
