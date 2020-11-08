import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function FeedbackListItem(props) {
  return (
    <TableRow>
      <TableCell colSpan={1} align="left">
        {props.list.id}
      </TableCell>
      <TableCell colSpan={1} align="left">
        {props.list.feeling}
      </TableCell>
      <TableCell colSpan={1} align="left">
        {props.list.understanding}
      </TableCell>
      <TableCell colSpan={1} align="left">
        {props.list.support}
      </TableCell>
      <TableCell colSpan={4} align="left">
        {props.list.comments}
      </TableCell>
    </TableRow>
  );
}

export default FeedbackListItem;
