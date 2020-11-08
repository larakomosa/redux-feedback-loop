import React from 'react';

function FeedbackListItem(props) {
  return (
    <div>
      <tr>
        <td> {props.list.id}</td>
        <td>{props.list.feeling}</td>
        <td>{props.list.understanding}</td>
        <td>{props.list.support}</td>
        <td>{props.list.comments}</td>
      </tr>
    </div>
  );
}

export default FeedbackListItem;
