import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import MyRecipePage from "./containers/MyRecipePage";
import RecipeDetailPage from "./containers/RecipeDetailPage";
import RecipePage from "./containers/RecipePage";
import { HeaderProvider } from "./HeaderProvider";
function App() {
  return (
    <React.Fragment>
      <HeaderProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipe" component={RecipePage} />
            <Route exact path="/my-recipe" component={MyRecipePage} />
            <Route exact path="/recipe-detail/:id" component={RecipeDetailPage} />
            <Route exact path="/sign-in" component={LoginPage} />
          </Switch>

          <Footer />
        </Router>
      </HeaderProvider>
    </React.Fragment>
  );
}

export default App;
