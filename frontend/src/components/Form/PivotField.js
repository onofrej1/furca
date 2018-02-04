import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResourceData } from "./../../actions";

class PivotField extends Component {

  componentDidMount() {
    this.props.fetchResourceData(this.props.resourceTable);

    if (this.props.pivot) {
      this.props.fetchResourceData(this.props.pivot[0]);
    }
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
          let checked =
            this.props.values &&
            this.props.values.indexOf(option.id + "") !== -1;

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
  let [ pivotTable, compareField, valueField ] = props.pivot;
  let options = state.resources[props.resourceTable];
  let pivotResource = state.resources[pivotTable];
  let values = props.model[props.name];
  if (values === undefined && pivotResource) {
    console.log('set values');
    values = pivotResource.data
      .filter(row => {
        return row[compareField] === props.model.id;
      })
      .map(row => row[valueField] + "");
    props.setValue(props.name, values);
  }
  console.log('values', values);

  return {
    options: options ? options.data : [],
    values: values
  };
};

export default connect(mapStateToProps, {
  fetchResourceData
})(PivotField);
