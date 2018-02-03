import React, { Component } from "react";
import { connect } from "react-redux";
import SidebarLayout from "./Common/SidebarLayout";
import { fetchResourceData } from "./../actions";

class Page extends Component {
  componentDidMount() {
    this.props.fetchResourceData("page");
  }

  render() {
    if (!this.props.pages) {
      return <div />;
    }

    const id = this.props.match.params.id;
    let page =
      this.props.pages &&
      this.props.pages.find(page => page.id === parseInt(id, 10));

    return (
      <SidebarLayout contentTitle={page.title}>
        <p dangerouslySetInnerHTML={{ __html: page.body }} />
      </SidebarLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.resourceData.page
  };
};

export default connect(mapStateToProps, { fetchResourceData })(Page);
