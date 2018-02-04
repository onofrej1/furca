import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import { fetchResourceData } from "./../../actions";
import { connect } from "react-redux";
import {
  Nav,
  //NavLink, -dont work with react router
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  NavItem
  //DropdownItem -dont work with react router/page is refreshing
} from "reactstrap";
import { Link } from "react-router-dom";

class Menu extends Component {
  static defaultProps = {
    menuItems: []
  };

  componentDidMount() {
    this.props.fetchResourceData("menuitem");
  }

  render() {
    let menuItems = this.props.menuItems;
    
    if (!menuItems) {
      return <div />;
    }

    let menuTree = [];

    for (let i in menuItems) {
      let menuItem = menuItems[i];
      let item = {
        item: menuItem,
        children: menuItems.filter(i => i.parent_id === menuItem.id)
      };
      menuTree.push(item);
    }

    return (
      <Nav className="ml-auto" navbar>
      <NavItem>
        <Link className="nav-link" to={"/admin"}>
          Admin
        </Link>
        </NavItem>
        {/*<NavItem>
          <Link className="nav-link" to={"/prihlaska"}>
            Prihlaska
          </Link>
        </NavItem>
        */}
        {menuTree.filter(menu => menu.item.parent_id === null).map(menu => {
          if (menu.children.length === 0) {
            let link = menu.item.page_id
              ? "/page/" + menu.item.page_id
              : menu.item.link;
            let isExternalLink = /^https?:\/\//.test(link);

            return (
              <NavItem key={menu.item.id}>
                {isExternalLink ? (
                  <a href={link} className="nav-link">{menu.item.title}</a>
                ) : (
                  <Link className="nav-link" to={link}>
                    {menu.item.title}
                  </Link>
                )}
              </NavItem>
            );
          }

          return (
            <UncontrolledDropdown nav key={menu.item.id}>
              <DropdownToggle nav caret>
                {menu.item.title}
              </DropdownToggle>
              <DropdownMenu>
                {menu.children.map(child => {
                  return (
                    <Link
                      key={child.page_id}
                      className="dropdown-item"
                      to={"/page/" + child.page_id}
                    >
                      {child.title}
                    </Link>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        })}

        <UncontrolledDropdown nav>
          <DropdownToggle nav caret className="user-dropdown-toggle">
            <FontAwesome name="user" className="fa-lg" />{' '}
            <FontAwesome name="sign-in" className="fa-lg" />
          </DropdownToggle>
          <DropdownMenu>
                <Link
                  className="dropdown-item"
                  to="/login"
                >
                <FontAwesome name="user" className="fa-lg" />{' '}Log in
                </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menuItems: state.resourceData.menuitem
  };
};

export default connect(mapStateToProps, {
  fetchResourceData
})(Menu);
