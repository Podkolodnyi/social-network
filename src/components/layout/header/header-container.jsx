import classes from "./header.module.css";
import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { email, login, id } = response.data.data;
          this.props.setAuthUserData(email, login, id);
        }
      });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
