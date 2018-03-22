import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Shows from "./pages/concerts/Shows";
import Profile from "./pages/Profile/Profile"
import { Button } from 'reactstrap';
import ChatApp from "./pages/chatroom/App";
// import register from "./pages/register";
// import Signin from "./pages/signin/Signin";
// import shows from "./pages/concerts/shows";
// import chatroom from "./pages/chatroom";
import register from "./pages/registration/registration";
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// // import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      {/* <Navbar /> */}
        <Route exact path="/register" component={register} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Shows" component={Shows} />
        <Route exact path="/chatroom" component={ChatApp} />
       {/* <Footer /> */}
    </div>
  </Router>;

export default App;
