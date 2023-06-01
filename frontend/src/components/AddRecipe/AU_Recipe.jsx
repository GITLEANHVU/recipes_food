import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  API_LINK_CATEGORY_READ_ALL,
  API_LINK_RECIPE_CREATE,
  API_LINK_RECIPE_READ_BY_ID,
  API_LINK_RECIPE_UPDATE,
  REACT_APP_UPLOADS,
} from "../../api_link";
import "./create-recipe.css";

export default function AU_Recipe() {
  // khai bao bien
  const [auth] = useContext(AuthContext);
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([{ id: 0, name: "" }]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const [category, setCategory] = useState(1);
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");

  // kiểm tra đã đăng nhập hay chưa
  useEffect(() => {
    if (auth.isAuth === false) {
      history.push("/");
    }
    const getCategories = async () => {
      const response = await fetch(API_LINK_CATEGORY_READ_ALL, {
        method: "GET",
        headers: {
          Accept: "application/json;charset=UTF-8",
        },
      });
      return await response.json();
    };
    getCategories().then((result) => {
      setCategories(result);
    });
    if (id !== undefined) {
      // get categories
      // UPDATE RECIPES THEO ID
      const getRecipeToUpdate = async (id) => {
        const response = await fetch(API_LINK_RECIPE_READ_BY_ID, {
          method: "POST",
          headers: {
            Accept: "application/json;charset=UTF-8",
          },
          body: JSON.stringify({ id: id }),
        });
        return await response.json();
      };

      getRecipeToUpdate(id).then((result) => {
        const recipe = result[0];
        const splitIngredients = String(recipe.ingredients).split("#");
        const splitSteps = String(recipe.steps).split("#");
        setName(recipe.name);
        setImage(recipe.image);
        setCategory(recipe.category_id);
        setDescription(recipe.description);
        setIngredients(splitIngredients);
        setSteps(splitSteps);
      });
    }
  }, [auth]);

  // ham chuc nang

  const handleAddCStep = () => {
    setSteps([...steps, step]);
  };
  const handleAddCIngredient = () => {
    setIngredients([...ingredients, ingredient]);
  };
  const handleDeleteIngredient = (indexDel) => {
    const newIngredients = ingredients.filter(
      (item, index) => index !== indexDel
    );
    setIngredients(newIngredients);
  };
  const handleDeleteStep = (indexDel) => {
    const newSteps = steps.filter((item, index) => index !== indexDel);
    setSteps(newSteps);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (id === undefined) {
      // TẠO MỚI MỘT RECIPE
      const createNewRecipe = async (url, inputData) => {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json;charset=UTF-8",
          },
          body: JSON.stringify({ ...inputData }),
        });
        return await response.json();
      };
      const data = {
        name: name,
        image: image,
        description: description,
        steps: steps.join("#"),
        ingredients: ingredients.join("#"),
        category_id: category,
        account_id: auth.user.id,
      };
      createNewRecipe(API_LINK_RECIPE_CREATE, data).then((result) => {});
    } else {
      // UPDATE RECIPES THEO ID
      const updateNewRecipe = async (url, inputData) => {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json;charset=UTF-8",
          },
          body: JSON.stringify({ ...inputData }),
        });
        return await response.json();
      };
      const data = {
        name: name,
        image: image,
        description: description,
        steps: steps.join("#"),
        ingredients: ingredients.join("#"),
        id: id,
        category_id: category,
        account_id: auth.user.id,
      };
      updateNewRecipe(API_LINK_RECIPE_UPDATE, data).then((result) => {});
    }
  };
  const handleUploadFile = (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("sendimage", files[0]);
    fetch(`http://localhost:9090/api/upload.php`, {
      // mode: "no-cors",
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImage(result.filename);
      });
  };
  return (
    <div className="body-au-recipe">
      {/* Head title */}
      <div className="container">
        <h2 className="text-center my-4">
          {id === undefined
            ? "Thêm mới công thức nấu ăn"
            : "Cập nhật công thức nấu ăn"}
        </h2>
      </div>
      {/* Main section */}
      <div className="container">
        <form>
          {/* name */}
          <div className="input-group mb-3">
            <span className="input-group-text">Tên công thức</span>
            <input
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              type="text"
              className="form-control"
              placeholder="Tên công thức ..."
            />
          </div>
          {/* image | description */}
          <div className="row mb-3">
            <div className="col-md-4 col-sm-6">
              <div className="input-group">
                <label>
                  <input
                    defaultValue={image}
                    onChange={(e) => {
                      handleUploadFile(e);
                    }}
                    type="file"
                    name="sendimage"
                    className="form-control"
                  />
                  <img
                    src={`${REACT_APP_UPLOADS}/${image}`}
                    style={{ cursor: "pointer" }}
                    className="img-fluid img-thumbnail plane"
                    alt=""
                  />
                </label>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 pt-5">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ height: "100%" }}
                className="form-control"
                placeholder="Mô tả"
                rows="10"
              />
            </div>
          </div>
          {/* ingredients | categories  */}
          <div className="row mb-3 ">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h5 className="text-center">Loại</h5>
              <div className="input-group">
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Thành phần món ăn</h5>
              <div className="input-group mb-3">
                <textarea
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                  className="form-control"
                />
                <button
                  onClick={() => handleAddCIngredient()}
                  className="btn mx-1 btn-success"
                  type="button"
                >
                  Thêm
                </button>
              </div>

              <ol className="list-group list-group-numbered">
                {ingredients.map((content, index) => {
                  if (content.trim().length === 0) return;
                  return (
                    <li key={index} className="list-group-item d-flex">
                      <span className="me-auto">{content}</span>
                      <button
                        onClick={() => handleDeleteIngredient(index)}
                        className="btn btn-danger button-small"
                        type="button"
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-center">Các bước thực hiện</h5>
              <div className="input-group mb-3">
                <textarea
                  value={step}
                  onChange={(e) => setStep(e.target.value)}
                  className="form-control"
                />
                <button
                  onClick={() => handleAddCStep()}
                  className="btn mx-1 btn-success"
                  type="button"
                >
                  Thêm
                </button>
              </div>

              <ol className="list-group list-group-numbered">
                {steps.map((content, index) => {
                  if (content.trim().length === 0) return;
                  return (
                    <li key={index} className="list-group-item d-flex">
                      <span className="me-auto">{content}</span>
                      <button
                        onClick={() => handleDeleteStep(index)}
                        className="btn btn-danger button-small"
                        type="button"
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="d-grid">
            <button
              onClick={handleSubmitForm}
              className="btn mx-1 btn-primary"
              type="submit"
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
