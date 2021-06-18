import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import DetailRecipe from "./components/Detail/DetailRecipe";
import Home from "./components/Home/Home";
import MyRecipe from "./components/MyRecipes/MyRecipe";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Login from "./components/Login/Login";
import CreateAccount from "./components/Login/CreateAccount";
import NotFound from "./components/Error/NotFound";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Router>

        {/* header */}
        <Header />
        <Switch>

          {/* Home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* My recipe */}
          <Route path="/my-recipes">
            <MyRecipe />
          </Route>

          {/* Add recipe */}
          <Route exact path="/au-recipe">
            <AddRecipe />
          </Route>
          {/* Update recipe */}
          <Route path="/au-recipe/:id">
            <AddRecipe />
          </Route>

          {/* Detail recipe */}
          <Route path="/detail-recipe/:id">
            <DetailRecipe />
          </Route>

          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>
          {/* register */}
          <Route path="/register">
            <CreateAccount />
          </Route>

          <Route path='*' exact={true} component={NotFound} />

        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;