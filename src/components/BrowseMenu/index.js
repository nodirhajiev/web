import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Button, Divider, Menu, MenuItem } from "@material-ui/core";

import { guid } from "../../components";

export default class BrowseMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAnchor: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(evt) {
    this.setState({
      menuAnchor: evt.currentTarget,
    });
  }

  handleClose(evt) {
    this.setState({
      menuAnchor: false,
    });
  }

  render() {
    let { categories } = this.props;
    let starred_lists = JSON.parse(
      window.localStorage.getItem("starred_lists") || "[]"
    );

    return (
      <div className="Browse" style={{ marginRight: "15px" }}>
        <Button
          aria-controls="browse-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Browse
        </Button>
        <Menu
          id="browse-menu"
          anchorEl={this.state.menuAnchor}
          keepMounted
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          open={Boolean(this.state.menuAnchor)}
          onClose={this.handleClose}
        >
          <Link to={"/"} className="no_decoration_link">
            <MenuItem onClick={this.handleClose}>Home Page</MenuItem>
          </Link>
          <Divider />
          {categories.length
            ? categories.map((category) => (
                <Link
                  to={`/browse/${category.name}`}
                  key={guid()}
                  className="no_decoration_link"
                >
                  <MenuItem onClick={this.handleClose}>
                    {category.name}
                  </MenuItem>
                </Link>
              ))
            : null}
          {starred_lists.length ? (
            <div>
              <Divider />
              <Link to={"/starred"} className="no_decoration_link">
                <MenuItem onClick={this.handleClose}>Starred Lists</MenuItem>
              </Link>
            </div>
          ) : null}
        </Menu>
      </div>
    );
  }
}
