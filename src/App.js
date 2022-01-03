import './App.css';
import {Routes, Route} from 'react-router-dom';
import Messages from "./layout/outlet/messages/messages";
import Layout from "./layout/layout";
import Profile from "./layout/outlet/profile/profile";

let App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
  );
}

export default App;
