import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/homepage/homepage.component.jsx";
import ShopPage from "./components/pages/shop/shop.component.jsx";
const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
