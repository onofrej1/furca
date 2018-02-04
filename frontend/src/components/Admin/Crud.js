import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import Field from "./../Form/Field";
import models from "./CrudModels";
import DataTable from "./../DataTable";
import { Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import {
  fetchResourceData,
  fetchResourceFields,
  setActiveRow,
  saveResourceData,
} from "./../../actions";
import actionButtons from "./actionButtons";
import { Box } from "reactjs-admin-lte";
import Form from "../Form/Form";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  static defaultProps = {
    data: []
  };

  fieldsMap = {
    string: "text",
    integer: "number"
  };

  getListFields = () => {
    let columns = [];
    let dbColumns = this.props.fields;
    let fields = models[this.props.name].list || {};

    for (let key in dbColumns) {
      if(key === 'id') {
        continue;
      }
      const column = { header: key, field: key, ...fields[key] };
      columns.push(column);
    }
    columns.push(actionButtons);

    return columns;
  };

  getFormFields = () => {
    let dbColumns = this.props.fields;
    let fields = models[this.props.name].form || {};
    console.log(fields);
    let data = {};
    for (let key in dbColumns) {
      const type = key === "id" ? "hidden" : this.fieldsMap[dbColumns[key].type];
      data[key] = { type, ...fields[key] };
      if(fields[key] === false) delete data[key];
    }

    return data;
  };

  processForm(data) {
    this.props.saveResourceData(data);
}

  componentDidMount() {
    this.props.fetchResourceData(this.props.name);
    this.props.fetchResourceFields(this.props.name);
  }

  render() {
    const fields = this.getFormFields();
    const columns = this.getListFields();

    return (
      <Row>
        <Col md={12}>
          <Box className="box-primary">
            <Box.Header className="with-border">
              <Box.Title>{this.props.name}</Box.Title>{" "}
              <button
                className="my-btn"
                onClick={() => this.props.setActiveRow({})}
              >
                <FontAwesome name="plus-square-o" /> Add new
              </button>
            </Box.Header>
            <Box.Body>
              <Modal
                isOpen={this.props.activeRow !== null}
                className="modal-lg"
              >
                <ModalHeader
                  className="modal-header-primary"
                  toggle={() => this.props.setActiveRow(null)}
                >
                  <FontAwesome name="pencil-square" /> Model
                </ModalHeader>
                <ModalBody>
                  <Form
                    model={this.props.activeRow}
                    processForm={this.processForm}
                    callback={this.afterSave}
                    addButtons
                  >
                    {Object.keys(fields).map(key => {
                      const field = fields[key];
                      //console.log(field);
                      if (field instanceof Object) {
                        return <Field key={key} name={key} label={key} {...field} />;
                      }

                      return (
                        <div>
                          <Field name={key} label={key} type={field} />
                        </div>
                      );
                    })}
                  </Form>
                </ModalBody>
              </Modal>

              <DataTable
                columns={columns}
                data={this.props.data}
                edit={this.props.setActiveRow}
                remove={this.props.deleteResourceRow}
              />
            </Box.Body>
          </Box>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.resourceData[ownProps.name],
    fields: state.resourceFields[ownProps.name],
    activeRow: state.activeRow,
  };
};

export default connect(mapStateToProps, {
  saveResourceData,
  fetchResourceData,
  fetchResourceFields,
  setActiveRow
})(Crud);
