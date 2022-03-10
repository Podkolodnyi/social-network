import { Routes, Route } from "react-router-dom";
import Messages from "./components/layout/outlet/messages/messages-container";
import Layout from "./components/layout/layout";
import UsersContainer from "./components/layout/outlet/users/users-container";
import ProfileContainer from "./components/layout/outlet/profile/profile-container";
import Login from "./components/layout/outlet/login/login";

let App = (props) => {
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

export default App;
