import { Routes, Route } from "react-router-dom";
import React from "react";
import Messages from "./components/layout/outlet/messages/messages-container";
import Layout from "./components/layout/layout";
import UsersContainer from "./components/layout/outlet/users/users-container";
import ProfileContainer from "./components/layout/outlet/profile/profile-container";
import Login from "./components/layout/outlet/login/login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { authMe } from "./redux/auth-reducer";
import Preloader from "./components/common/preloader";

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return <App {...this.props} />;
  }
}

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<ProfileContainer />}>
          <Route path=":id" element={<ProfileContainer />} />
        </Route>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

let mapStateToProps = (state) => {
  return { initialized: state.app.initialized };
};

export default connect(mapStateToProps, { initializeApp, authMe })(
  AppContainer
);
