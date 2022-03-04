import classes from "./header.module.css";
import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { authMe, setAuthUserData } from "../../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  email: state.auth.email,
});

export default connect(mapStateToProps, { setAuthUserData, authMe })(
  HeaderContainer
);
