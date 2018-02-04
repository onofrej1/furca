import React from "react";
import { Button } from "reactstrap";
import FontAwesome from "react-fontawesome";

const actionButtons = {
  Header: "Action",
  Cell: props => (
    <div className="text-center text-nowrap">
      <Button outline color="secondary" size="sm"
        onClick={() => props.edit(props.row)}
      >
        aaa<FontAwesome name="pencil-square" />
      </Button>{" "}
      <Button
        className="my-btn"
        onClick={() => props.remove(props.row)}
      >
        <FontAwesome name="trash-o" />
      </Button>
    </div>
  )
};
export default actionButtons;
