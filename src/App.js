import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Messages from "./components/layout/outlet/messages/messages";
import Layout from "./components/layout/layout";
import Profile from "./components/layout/outlet/profile/profile";

let App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/messages"
          element={
            <Messages
              messagesPage={props.state.messagesPage}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          index
          element={
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }
        />
        {props.state.messagesPage.dialogs.map((elem) => (
          <Route key={elem.id} path={`/messages/${elem.id}`} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
