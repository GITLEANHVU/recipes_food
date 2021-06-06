import React, { useState, useEffect } from 'react';
import './create-recipe.css';

export default function AddRecipe() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://img.taste.com.au/z09DD4Ls/taste/2018/07/zucchini-lasagne-roll-ups-139165-1.jpg');
  const [description, setDescription] = useState('')

  const [category, setCategory] = useState(0);
  const [ingredient, setIngredient] = useState('');
  const [step, setStep] = useState('');

  // save list value
  const [categories, setCategories] = useState(['one', 'two', 'three']);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const [errorDialog, setErrorDialog] = useState({ check: false, title: '', content: '' });


  const handleClickAddNewIngredient = () => {
    if (ingredient === '') return;
    setIngredients([...ingredients, ingredient]);
  }
  const handleClickAddNewCategory = () => {
    if (category === '') return;
    setCategories([...categories, category]);
  }
  const handleClickAddNewStep = () => {
    if (step === '') return;
    setSteps([...steps, step]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('nameRecipe: ', name);
    console.log('imageRecipe: ', image);
    console.log('description: ', description);
    console.log('category: ', category);
    // console.log('ingredient: ', ingredient);
    // console.log('step: ', step);

    console.log(ingredients)
    console.log(steps)

    // setErrorDialog] = useState({check: false, title: '', content: ''});
    if (name === '') { setErrorDialog({ check: true, title: 'Error name input', content: 'Name is empty' }); return; }
    if (image === '') { setErrorDialog({ check: true, title: 'Error image input', content: 'Image is empty' }); return; }
    if (description === '') { setErrorDialog({ check: true, title: 'Error description input', content: 'Description is empty' }); return; }
    if (category === '') { setErrorDialog({ check: true, title: 'Error category input', content: 'Category is empty' }); return; }
    if (ingredients.length === 0) { setErrorDialog({ check: true, title: 'Error ingredients input', content: 'Ingredients is empty' }); return; }
    if (steps.length === 0) { setErrorDialog({ check: true, title: 'Error steps input', content: 'Steps is empty' }); return; }
  }

  // CHƯA LÀM XONG.
  const bodyStyle = (check) => {
    if (check === true) {
      document.body.style.overflow = 'hidden'
      
    } else {
      document.body.style.overflow = 'unset';
    }
  }
  
  const ErrorMessage = (props) => {
    return (
      <div className="error__dialog-wrapper">
        <div className="error__dialog">
          <div className="error__dialog-title">
            {props.title}
          </div>
          <div className="error__dialog-content">
            {props.content}
          </div>
          <div className="error__dialog-footer">
            <button onClick={(e) => setErrorDialog({ ...errorDialog, check: false })} type="button" className="btn btn-secondary px-3 mt-2">OK</button>
          </div>
        </div>
      </div>
    );
  }
  return (

    <div className="body-add-recipe">

      { bodyStyle(errorDialog.check)}
      {errorDialog.check && ErrorMessage(errorDialog)}

      <div className="container">
        <h2 className="text-center my-4">CREATE NEW RECIPE</h2>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="input-group mb-3">
            <span className="input-group-text">Recipe name</span>
            <input onChange={(e) => setName(e.target.value)} autoFocus type="text" className="form-control" placeholder="Recipe name" aria-label="recipe-name" aria-describedby="lav" />
          </div>

          {/* image | description */}
          <div className="row mb-3">
            <div className="col-md-4 col-sm-6">
              <div className="input-group">
                <label>
                  <input onChange={(e) => setImage(e.target.value)} type="file" className="form-control" />
                  <img style={{ cursor: 'pointer' }} src={image} alt="image food" className="img-fluid img-thumbnail" />
                </label>
              </div>
            </div>
            <div className="col-md-8 col-sm-6">
              <textarea onChange={(e) => setDescription(e.target.value)} style={{ height: '100%' }} className="form-control" placeholder="Enter your description here" defaultValue={""} />
            </div>
          </div>

          {/* ingredients | categories  */}
          <div className="row mb-3 ">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h5 className="text-center">Categories</h5>

              <div className="input-group">
                <select onChange={(e) => setCategory(e.target.value)} className="form-select" style={{ maxWidth: '36%' }}>
                  {categories.map((item, index) => {
                    if (item === category) {
                      setCategory(index); // set category_id. 
                      return (<option selected key={index} value={index}>{item}</option>);
                    } else return (<option key={index} value={index}>{item}</option>);
                  })}
                </select>
                <input onChange={(e) => setCategory(e.target.value)} type="text" className="form-control" placeholder="Add new category" />
                <button onClick={handleClickAddNewCategory} className="btn mx-1 btn-success" type="button">Add new</button>
              </div>
            </div>

          </div>

          {/* steps */}
          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Ingredients</h5>
              <div className="input-group mb-3">
                <textarea onChange={(e) => setIngredient(e.target.value)} className="form-control" aria-label="With textarea" defaultValue={""} />
                <button onClick={handleClickAddNewIngredient} className="btn mx-1 btn-success" type="button" >Add new</button>
              </div>
              {/* hiển thị ingredients */}
              <ol className="list-group list-group-numbered">
                {ingredients.map((ingredient_content, index) => {
                  return (<li key={index} className="list-group-item">{ingredient_content}</li>)
                })}
              </ol>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Steps</h5>
              <div className="input-group">
                {/* <span className="input-group-text">Step</span> */}
                <textarea onChange={(e) => setStep(e.target.value)} className="form-control" aria-label="With textarea" defaultValue={""} />
                <button onClick={handleClickAddNewStep} className="btn mx-1 btn-success" type="button">Add new</button>
              </div>

              {/* hiển thị steps */}
              <ol className="list-group list-group-numbered">
                {steps.map((step_content, index) => {
                  return (<li key={index} className="list-group-item">{step_content + ""}</li>)
                })}
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
