import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import DetailRecipe from "./Components/Detail/DetailRecipe";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Home/Home";
import MyRecipes from "./Components/MyRecipes/RecipeList";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/Login/CreateAccount";

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

          {/* Home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* My recipe */}
          <Route path="/my-recipes">
            <MyRecipes />
          </Route>

          {/* Add recipe */}
          <Route exact path="/add-recipe">
            <AddRecipe />
          </Route>
          {/* Update recipe */}
          <Route path="/add-recipe/:id">
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
// 234 hop;

// toi thu 2: xong sql,
// toi thu 3: chay du lieu that, du lieu mau;
// toi thu 4: xong chuc nang;

// toi thu 5: fix loi NHỎ.
// ************************************************ //