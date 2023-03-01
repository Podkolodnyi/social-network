import classes from "./header.module.css";
import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { authMe, logout } from "../../../redux/auth-reducer";

class HeaderContainer extends React.PureComponent {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  email: state.auth.email,
});

export default connect(mapStateToProps, { authMe, logout })(HeaderContainer);
