import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

<<<<<<< HEAD
import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import MyRecipe from "./Components/MyRecipes/MyRecipe";
// import DetailRecipe from "./Components/Detail/DetailRecipe";
=======
// Components
// import DetailRecipe from "./Components/Detail/DetailRecipe";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Home/Home";
// import MyRecipes from "./Components/MyRecipes/RecipeList";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import Login from "./Components/Login";
// import CreateAccount from "./Components/Login/CreateAccount";
>>>>>>> 493c4d62411eac694798e660ae559c2ede7968f1

// contexts
import { AuthContext } from './Contexts/AuthContext';

// custom hook
// import useFetch from './hooks/useFetch'

function App() {
  // const [auth, setAuth] = useContext(AuthContext);
  // const [{ response, error, isLoading }, doFetch] = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // useEffect(() => { doFetch(); }, [doFetch]);
  // console.log("App: ", response, error, isLoading)
  return (
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/my-recipes">
          <MyRecipes />
          </Route> */}
          <Route path="/add-recipe">
            <AddRecipe />
          </Route>
          {/* <Route path="/detail-recipe">
          <DetailRecipe />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>

          {/* <Route path="/register">
        <CreateAccount />
        </Route> */}
        </Switch>
      </Router>
    </React.Fragment>
=======

>>>>>>> 493c4d62411eac694798e660ae559c2ede7968f1
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/"> <Home /> </Route>

<<<<<<< HEAD
          <Route path="/my-recipes"><MyRecipe /></Route>
=======
        {/* <Route path="/my-recipes"><MyRecipes /></Route> */}
>>>>>>> 493c4d62411eac694798e660ae559c2ede7968f1

        <Route path="/add-recipe"><AddRecipe /></Route>

        {/* <Route path="/detail-recipe"><DetailRecipe /></Route> */}

        <Route path="/login"><Login /></Route>

        {/* <Route path="/register"><CreateAccount /></Route> */}
      </Switch>
    </Router>
<<<<<<< HEAD
=======
>>>>>>> 4cf662b74cd0c929746ea853ea987e0a31f002a8
>>>>>>> 493c4d62411eac694798e660ae559c2ede7968f1
  );
}

export default App;

