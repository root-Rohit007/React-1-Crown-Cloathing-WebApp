import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SISU from "./Pages/sign-in-sign-up/sisu.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SISU} />
      </Switch>
    </div>
  );
}

export default App;
