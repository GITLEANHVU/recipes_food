import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import DetailRecipe from "./Components/Detail/DetailRecipe";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Home/Home";
import MyRecipes from "./Components/MyRecipes/RecipeList";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import Login from "./Components/Login";
import CreateAccount from "./Components/Login/CreateAccount";

// contexts
import { AuthContext } from './Contexts/AuthContext';

function App() {
  // const [data, setData] = useState(null);
  // const handCLickGetData = async (id) => {
  //   const url = "";
  //   const options = {}
  //   const res = await fetch(url, options)
  //   const result = await res.json();

  //   if (result != null) {
  //     setData(result);
  //   }
  // }
  return (
    <React.Fragment>
      <Router>
        {/* <button onClick={handCLickGetData(2)}></button>
        {console.log(data)} */}
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-recipes">
          <MyRecipes />
          </Route>
          <Route path="/add-recipe">
            <AddRecipe />
          </Route>
          <Route path="/detail-recipe/:id"><DetailRecipe />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
        <CreateAccount />
        </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;


// const [auth, setAuth] = useContext(AuthContext);
  // custom hook
//   import useFetch from './hooks/useFetch'
// const [{ response, error, isLoading }, doFetch] = useFetch("https://jsonplaceholder.typicode.com/todos/");

// const handleClickGetRecipe = (id) => {
//   const res = doFetch({
//     method: `DELETE`,
//       headers: {
//         'Accept': 'application/json;charset=UTF-8'
//       },
//       body: JSON.stringify({id: id}),
//   });
//   console.log(res)
// }
// // show detail, update, delete
// handleClickGetRecipe(1);
// // home, my recipes, 
//   useEffect(() => { doFetch(); }, [doFetch]);
//   console.log("App: ", response, error, isLoading)




// ************************************************ //
// 234 hop; toi thu 2: xong sql, du lieu mau; toi thu 4: xong chuc nang;
// toi thu 5: fix loi NHỎ.
// ************************************************ //