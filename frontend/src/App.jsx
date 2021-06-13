import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages

import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import MyRecipe from "./Components/MyRecipes/MyRecipe";
// import DetailRecipe from "./Components/Detail/DetailRecipe";

// contexts
import { AuthContext } from './Contexts/AuthContext';
// custom hook

import useFetch from './hooks/useFetch'
import Nav from "./Components/Header/Nav";
import CreateAccount from "./Components/Login/CreateAccount";
// import CreateAccount from "./Components/Login/CreateAccount";

function App() {
  // const [auth, setAuth] = useContext(AuthContext);
  // const [{ response, error, isLoading }, doFetch] = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // useEffect(() => { doFetch(); }, [doFetch]);
  // console.log("App: ", response, error, isLoading)

  return (
    
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/"> <Home /> </Route>

          <Route path="/my-recipes"><MyRecipe /></Route>

        <Route path="/add-recipe"><AddRecipe /></Route>

          {/* <Route path="/detail-recipe"><DetailRecipe /></Route> */}

          <Route path="/login"><Login /></Route>

        {/* <Route path="/register"><CreateAccount /></Route> */}
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


function UploadFiles() {
  const handleUploadFile = e => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('sendimage', files[0]);
    // console.log(formData)
    fetch(`http://localhost:83/recipes_food/backend/api/upload.php`, {
      mode: "no-cors",
      method: "POST",
      body: formData
    })
      .then(res => res)
      .then(result => console.log(result));
  }
  return (
    <form>
      <h1>Upload file</h1>
      <input onChange={e => handleUploadFile(e)} type="file" name="sendimage" />
    </form>
  );
}