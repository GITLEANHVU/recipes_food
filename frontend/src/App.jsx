import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
// import Search from "./Components/MyRecipes/Search";
// import RecipeList from "./Components/MyRecipes/RecipeList";
// import Pagination from "./Components/MyRecipes/Pagination";
// import Header from "./Components/Header/Header";

import DetailRecipe from "./Components/Detail/DetailRecipe";
import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import MyRecipes from "./Components/MyRecipes/RecipeList";


// contexts
import { AuthContext } from './Contexts/AuthContext';
// custom hook
import useFetch from './hooks/useFetch'
import Nav from "./Components/Header/Nav";
import CreateAccount from "./Components/Login/CreateAccount";
function App() {
  const [auth, setAuth] = useContext(AuthContext);
  const [{ response, error, isLoading }, doFetch] = useFetch("https://jsonplaceholder.typicode.com/todos/");
  useEffect(() => { doFetch(); }, [doFetch]);
  console.log("App: ", response, error, isLoading)

  return (
    <Router>

      <Nav />
      <Switch>
        <Route exact path="/"> <Home /> </Route>

        <Route path="/my-recipes"><MyRecipes /></Route>

        <Route path="/add-recipe"><AddRecipe /></Route>

        <Route path="/detail-recipe"><DetailRecipe /></Route>

        <Route path="/login"><Login /></Route>

        <Route path="/register"><CreateAccount /></Route>
      </Switch>
    </Router>
  );
}

export default App;


// const Main = () => {
//   return auth.isAuth ?
//     "Da dang nhap"
//     :
//     "Chua dang nhap";
// }