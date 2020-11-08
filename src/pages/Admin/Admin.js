import FeedbackListItem from '../AdminItem/AdminItem';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {
  state = {
    feedbackList: [],
  };

  componentDidMount() {
    this.getFeedback(); //ready on page load. (comparable to document on ready Jquery function)
  }

  getFeedback = () => {
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
          errorMsg: 'Something went terribly wrong.', //indicates error
        });
      });
  };

  render() {
    const feedbackArray = this.state.feedbackList.map((item, index) => {
      return <FeedbackListItem key={index} list={item} />;
    });
    return (
      <div className="table">
        <h1>Feedback Data</h1>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Feeling</TableCell>
                <TableCell align="left">Understanding</TableCell>
                <TableCell align="left">Support</TableCell>
                <TableCell colSpan={6} align="left">
                  Comments
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{feedbackArray}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default connect()(Admin);
