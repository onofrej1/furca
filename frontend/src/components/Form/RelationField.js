import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResourceData, fetchResourceFields } from "./../../actions";

class RelationField extends Component {
  componentDidMount() {
    this.props.fetchResourceData(this.props.resourceTable);
    this.props.fetchResourceFields(this.props.resourceTable);
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
      options,
      emptyOption,
      fetchResourceData,
      fetchResourceFields,
      ...props
    } = this.props;

    if (props.value) {
    }

    return (
      <div className="form-group">
        <label>{label}</label>
        <select
          id={id}
          name={name}
          type={type}
          className="form-control"
          {...props}
        >
          {emptyOption && <option value={null} />}
          {options.map(
            row =>
              this.props.render ? (
                <this.props.render row={row} />
              ) : (
                <option key={row.id} value={row.id}>
                  row[this.props.show]
                </option>
              )
          )}
        </select>

        {help && <p class="help-block">{help}</p>}
        {error && <p class="help-block">{error}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    options: state.resourceData[ownProps.resourceTable]
  };
};

export default connect(mapStateToProps, {
  fetchResourceData,
  fetchResourceFields
})(RelationField);
