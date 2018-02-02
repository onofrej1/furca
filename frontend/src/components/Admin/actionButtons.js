import React from "react";
import { Button } from "reactstrap";
import FontAwesome from "react-fontawesome";

const actionButtons = {
  Header: "Action",
  Cell: props => (
    <div className="text-center text-nowrap">
      <button className="my-btn"
        onClick={() => props.edit(props.row)}
      >
        <FontAwesome name="pencil-square" />
      </button>{" "}
      <button        
        className="my-btn"
        onClick={() => props.remove(props.row)}
      >
        <FontAwesome name="trash-o" />
      </button>
    </div>
  )
};
export default actionButtons;
