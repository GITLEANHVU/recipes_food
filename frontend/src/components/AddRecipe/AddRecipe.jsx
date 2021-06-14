import React, { useState, useEffect } from 'react';
import './create-recipe.css';
import { useParams } from 'react-router-dom';
export default function AddRecipe() {
  const { id } = useParams();
  const urlUpdate = process.env.REACT_APP_API_LAV_RECIPE_BY_ID;
  const urlUploads = process.env.REACT_APP_UPLOADS;
  useEffect(() => {
    const getRecipe = async (url, id) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ id: id }),
      });
      return await response.json();
    }

    if (id === undefined) {
      // do something
    } else {
      console.log("Update recipe");
      getRecipe(urlUpdate, id)
        .then(result => {
          if (result.length > 0) {
            const value = result[0];
            const ings = JSON.parse(JSON.parse(value.ingredients))
            const stps = JSON.parse(JSON.parse(value.steps))
            console.log(value.description)
            setNewRecipe({
              name: value.name,
              image: `${urlUploads}/${value.image}`,
              description: value.description,
              category: value.category,
              ingredients: ings,
              steps: stps,
            })
            setTempSteps(stps)
            setTempIngredients(ings);

          }
        });

    }
  }, [])

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "https://img.taste.com.au/z09DD4Ls/taste/2018/07/zucchini-lasagne-roll-ups-139165-1.jpg",
    description: "",
    category: "1",
    ingredients: [],
    steps: [],
  });

  // DB values
  const [newCategory, setNewCategory] = useState('');
  const [categoriesFromDB, setCategoriesFromDB] = useState(['one', 'two', 'three']);
  const handleAddNewCategory = () => {
    // update database

    // update categories
    setCategoriesFromDB([...categoriesFromDB, newCategory]);
  }

  const [newIngredient, setNewIngredient] = useState('');
  const [tempIngredients, setTempIngredients] = useState([]);
  const handleAddNewIngredient = () => {
    setTempIngredients([...tempIngredients, newIngredient]);
  }

  const [newStep, setNewStep] = useState('');
  const [tempSteps, setTempSteps] = useState([]);
  const handleAddNewStep = () => {
    setTempSteps([...tempSteps, newStep]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      // add new recipe
    } else {
      // update recipe
    }
    setNewRecipe({ ...newRecipe, ingredients: [...tempIngredients], steps: [...tempSteps] });

    console.log(newRecipe);
  }

  return (
    <div className="body-add-recipe">
      <div className="container">
        <h2 className="text-center my-4">
          {
            id === undefined ? "CREATE NEW RECIPE" : "UPDATE RECIPE"
          }
        </h2>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="input-group mb-3">
            <span className="input-group-text">Recipe name</span>
            <input defaultValue={newRecipe.name} onChange={e => setNewRecipe({ ...newRecipe, name: e.target.value })} autoFocus type="text" className="form-control" placeholder="Recipe name" aria-label="recipe-name" aria-describedby="lav" />
          </div>

          {/* image | description */}
          <div className="row mb-3">
            <div className="col-md-4 col-sm-6">
              <div className="input-group">
                <label>
                  <input onChange={e => setNewRecipe({ ...newRecipe, image: e.target.value })} type="file" className="form-control" />
                  <img src={newRecipe.image} style={{ cursor: 'pointer' }} className="img-fluid img-thumbnail" alt="" />
                </label>
              </div>
            </div>
            <div className="col-md-8 col-sm-6">
              <textarea value={newRecipe.description} onChange={e => setNewRecipe({ ...newRecipe, description: e.target.value })} style={{ height: '100%' }} className="form-control" placeholder="Enter your description here" />
            </div>
          </div>

          {/* ingredients | categories  */}
          <div className="row mb-3 ">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h5 className="text-center">Categories</h5>

              <div className="input-group">
                <select value={newRecipe.category} onChange={e => setNewRecipe({ ...newRecipe, category: e.target.value })} className="form-select" style={{ maxWidth: '36%' }}>
                  {
                    categoriesFromDB.map((item, index) =>
                      <option key={index} value={index}>{item}</option>)
                  }
                </select>
                <input defaultValue={newCategory} onChange={e => setNewCategory(e.target.value)} type="text" className="form-control" placeholder="Add new category" />
                <button onClick={handleAddNewCategory} className="btn mx-1 btn-success" type="button">Add new</button>
              </div>
            </div>

          </div>

          {/* steps */}
          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Ingredients</h5>
              <div className="input-group mb-3">
                <textarea onChange={e => setNewIngredient(e.target.value)} className="form-control" aria-label="With textarea" defaultValue={""} />
                <button onClick={handleAddNewIngredient} className="btn mx-1 btn-success" type="button" >Add new</button>
              </div>
              {/* hiển thị ingredients */}
              <ol className="list-group list-group-numbered">
                {
                  tempIngredients.map((content, index) =>
                    <li key={index} className="list-group-item">{content}</li>)
                }
              </ol>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Steps</h5>
              <div className="input-group mb-3">
                {/* <span className="input-group-text">Step</span> */}
                <textarea onChange={e => setNewStep(e.target.value)} className="form-control" aria-label="With textarea" defaultValue={""} />
                <button onClick={handleAddNewStep} className="btn mx-1 btn-success" type="button">Add new</button>
              </div>

              {/* hiển thị steps */}
              <ol className="list-group list-group-numbered">
                {
                  tempSteps.map((content, index) =>
                    <li key={index} className="list-group-item">{content.stepDes}</li>)
                }
              </ol>

            </div>
          </div>

          {/* button submit form */}
          <div className="d-grid">
            <button className="btn mx-1 btn-primary" type="submit">Submit</button>
          </div>

        </form>
      </div>

    </div>
  );
}