import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SISU from "./Pages/sign-in-sign-up/sisu.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SISU} />
        </Switch>
      </div>
    );
  }
}

export default App;
