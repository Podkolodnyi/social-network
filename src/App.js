import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MessagesContainer } from "./components/layout/outlet/messages/messagesContainer";
import Layout from "./components/layout/layout";
import Profile from "./components/layout/outlet/profile/profile";

/*        {props.state.messagesPage.dialogs.map((elem) => (
          <Route key={elem.id} path={`/messages/${elem.id}`} />
        ))}*/

let App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/messages" element={<MessagesContainer />} />
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
