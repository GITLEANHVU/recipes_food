import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./components/MyRecipes/Search";
import RecipeList from "./components/MyRecipes/RecipeList";
import Pagination from "./components/MyRecipes/Pagination";
import DetailRecipe from "./components/Detail/DetailRecipe";
function App() {
  return (
    <Router>
      <div className="app-recipes_food">

        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/my-recipe">
            <Search />
            <RecipeList />
            <Pagination />
          </Route>

          <Route exact path="/detail-recipe">
            <DetailRecipe></DetailRecipe>
          </Route>
        </Switch>

        <footer>
          Footer
       </footer>
      </div>
    </Router>
  );
}

export default App;
