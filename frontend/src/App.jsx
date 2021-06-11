import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages

<<<<<<< HEAD
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
// import AddRecipe from "./Components/AddRecipe/AddRecipe";
import MyRecipes from "./Components/MyRecipes/MyRecipe";
=======
<<<<<<< HEAD
import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
=======
// import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
// import AddRecipe from "./Components/AddRecipe/AddRecipe";
>>>>>>> c4c768fee1079cac7c3134109f65bd619bf800ab
// import MyRecipes from "./Components/MyRecipes/RecipeList";
>>>>>>> ff4dda524b8fa7214f0079d1b85ea0b6ddcf94d4
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
<<<<<<< HEAD
    
    <Router>
      <Nav />
      <UploadFiles />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
=======
  
     
      <Router>
        <Nav />
        {/* <UploadFiles /> */}
        <Switch>
<<<<<<< HEAD
          <Route exact path="/"> <Home /> </Route>
=======
          {/* <Route exact path="/"> <Home /> </Route> */}
>>>>>>> c4c768fee1079cac7c3134109f65bd619bf800ab
>>>>>>> ff4dda524b8fa7214f0079d1b85ea0b6ddcf94d4

          <Route path="/my-recipes"><MyRecipes /></Route>

<<<<<<< HEAD
        <Route path="/add-recipe"><AddRecipe /></Route>
=======
          {/* <Route path="/add-recipe"><AddRecipe /></Route> */}
>>>>>>> c4c768fee1079cac7c3134109f65bd619bf800ab

          {/* <Route path="/detail-recipe"><DetailRecipe /></Route> */}

          <Route path="/login"><Login /></Route>

<<<<<<< HEAD
        {/* <Route path="/register"><CreateAccount /></Route> */}
      </Switch>
    </Router>
=======
          <Route path="/register"> <CreateAccount /> </Route>
        </Switch>
      </Router>
      
>>>>>>> c4c768fee1079cac7c3134109f65bd619bf800ab
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