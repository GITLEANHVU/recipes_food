import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RecipePage from "./containers/RecipePage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/recipe" component={RecipePage} />
          <Route exact path="/sign-in" component={LoginPage} />
        </Switch>

        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
