import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "./Common/Layout";
import axios from "axios";
import { Table } from "reactstrap";
import { fetchResourceData } from "./../actions";

class HamburgResults extends Component {
  componentDidMount() {
    this.props.fetchResourceData("hamburg");
  }

  loadResults(id) {
    axios.get(this.props.baseUrl + "/csv/" + id).then(result => {
      this.setState({ results: result.data });
    });
  }

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  render() {
    console.log(this.props);

    return (
      <Layout contentTitle="Hamburg vysledky">
        <select name="hamburg" onChange={e => this.loadResults(e.target.value)}>
          {this.props.data.map(hamburg => {
            return (
              <option key={hamburg.id} value={hamburg.id}>
                Košicko - furčiansky hamburg {hamburg.title}
              </option>
            );
          })}
        </select>
        <Table striped>
          <thead className="modal-header-primary">
            <tr>
              {this.state.results.length > 0 &&
                this.state.results[0].map(cell => <th>{cell}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.state.results.slice(1).map(row => {
              return <tr>{row.map(cell => <td>{cell}</td>)}</tr>;
            })}
          </tbody>
        </Table>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    baseUrl: state.baseUrl,
    data: state.resourceData.hamburg
  };
};

export default connect(mapStateToProps, { fetchResourceData })(HamburgResults);
