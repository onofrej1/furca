import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResourceData, fetchResourceColumns } from "./../../actions";

class TagsField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchResourceData('Tag');

    if (this.props.pivotTable) {
      this.props.fetchResourceData(this.props.pivotTable);
      //this.props.fetchResourceColumns(this.props.pivotTable);
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
          //let checked = this.props.values.indexOf(option.id + "") !== -1;
          let checked = false;

          return (
            <label className="col-md-4">
              <input
                type="checkbox"
                name={this.props.name}
                onChange={props.onChange}
                inline
                value={option.id}
              />{" "}
              {option[this.props.show]}
            </label>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //let values = ownProps.model[ownProps.name];
  let options = state.resources.Tag;

  return {
    options: options ? options.data : [],
    values: values,
    //resources: state.resources
  };
};

export default connect(mapStateToProps, {
  fetchResourceData,
})(TagsField);
