import Sidebar from "./sidebar";
import React from "react";
import { connect } from "react-redux";

class SidebarContainer extends React.PureComponent {
  render() {
    return <Sidebar {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  homeId: state.auth.userId,
});

export default connect(mapStateToProps)(SidebarContainer);
