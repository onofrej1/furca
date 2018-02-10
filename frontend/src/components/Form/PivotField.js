import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResourceData } from "./../../actions";

class PivotField extends Component {
  componentDidMount() {
    this.props.fetchResourceData(this.props.resourceTable);
  }

  static defaultProps = {
    options: []
  };

  render() {
    let {
      id,
      name,
      type,
      label,
      help,
      error,
      emptyOption,
      ...props
    } = this.props;

    return (
      <div className="checkbox">
        <p>
          <strong>{label}</strong>
        </p>
        {this.props.options.map(option => {
          let checked = this.props.values.indexOf(option.id) !== -1;

          return (
            <label className="col-md-4">
              <input
                type="checkbox"
                name={this.props.name}
                onChange={props.onChange}
                checked={checked}
                inline
                value={option.id + ""}
              />{" "}
              {option[this.props.show]}
            </label>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    options: state.resourceData[props.resourceTable],
    values: props.model[props.name].map(row => row.id)
  };
};

export default connect(mapStateToProps, {
  fetchResourceData
})(PivotField);
