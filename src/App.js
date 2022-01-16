import classes from "./App.module.css";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/layout/outlet/messages/messages";
import Layout from "./components/layout/layout";
import Profile from "./components/layout/outlet/profile/profile";


let App = (props) => {

    let dialogRoute = props.state.messagesPage.dialogs.map(elem => <Route path={`/messages/${elem.id}`} />)

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/messages" element={<Messages messagesPage = {props.state.messagesPage}/>}/>
          <Route index element={<Profile
                  profilePage = {props.state.profilePage}
                  changePostText = {props.changePostText} addNewPost = {props.addNewPost}/>
          }/>
            {dialogRoute}
        </Route>
      </Routes>
  );
}

export default App;
