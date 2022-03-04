import { Routes, Route } from "react-router-dom";
import { MessagesContainer } from "./components/layout/outlet/messages/messages-container";
import Layout from "./components/layout/layout";
import UsersContainer from "./components/layout/outlet/users/users-container";
import { ProfileConnect } from "./components/layout/outlet/profile/profile-container";
import Login from "./components/layout/outlet/login/login";

let App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/messages" element={<MessagesContainer />} />
        <Route path="/profile" element={<ProfileConnect />}>
          <Route path=":id" element={<ProfileConnect />} />
        </Route>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
