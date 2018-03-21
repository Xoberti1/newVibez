import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Shows from "./pages/concerts/Shows";
import Profile from "./pages/Profile/Profile";
import register from "./pages/registration/registration";



const App = () =>
  <Router>
    <div>
      {/* <Navbar /> */}
        <Route exact path="/register" component={register} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Shows" component={Shows} />
      {/*<Route exact path="/chatroom" component={Chatroom} />
       <Footer /> */}
    </div>
  </Router>;

export default App;
