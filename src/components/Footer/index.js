import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { version } from "../../components";

const styles = (theme) => ({
  footer__container: {
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ paddingTop: "75px" }}>
        <footer className={classes.footer__container} id="footer__container">
          <a href="https://github.com/nodirhajiev/" target="_blank">
            <img
              src="https://telegra.ph/file/7168c6d39c4b2a1f134d8.png"
              className="footer__github"
              height="30px"
              alt="github-logo"
            />
          </a>
          <a
            className="no_decoration_link footer__text"
            href="https://t.me/nodir_khajiev"
            target="_blank"
          >
            {`© 2022 Copyright: Nodirbek Khajiev`}
          </a>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
