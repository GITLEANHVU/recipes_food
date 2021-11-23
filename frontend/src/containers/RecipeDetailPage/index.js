import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_LINK_ACCOUNT_BY_ID, API_LINK_COMMENT_READ_SINGLE, API_LINK_RECIPE_READ_BY_ID, REACT_APP_UPLOADS } from '../../api_link';
import CommentItem from '../../components/CommentItem';
import DirectionItem from '../../components/DirectionItem';
import IngredientItem from '../../components/IngredientItem';

export default function RecipeDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [recipe, setRecipe] = useState({});
  const [account, setAccount] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [comments, setComments] = useState([]);

  async function getRecipe() {
    const res = await axios.post(`${API_LINK_RECIPE_READ_BY_ID}`, JSON.stringify({ id: id }));
    if (Array(res.data).length > 0) {
      setRecipe(res.data[0]);
      if (`${res.data[0]['ingredients']}`.split('#').length > 0) {
        const ings = `${res.data[0]['ingredients']}`.split('#');
        setIngredients(ings);
      }
      if (`${res.data[0]['steps']}`.split('#').length > 0) {
        const ings = `${res.data[0]['steps']}`.split('#');
        setSteps(ings);
      }
    }
  }

  async function getAccount() {
    const res = await axios.post(`${API_LINK_ACCOUNT_BY_ID}`, JSON.stringify({ id: id }));
    if (Array(res.data).length > 0) {
      setAccount(res.data[0]);
    }
  }

  async function getComments() {
    const res = await axios.post(`${API_LINK_COMMENT_READ_SINGLE}`, JSON.stringify({ id: id }));
    if (Array(res.data).length > 0) {
      setComments(res.data);
    }
  }

  useEffect(() => {
    getRecipe();
    getAccount();
    getComments();
  }, []);

  return (
    <div id="recipe_detail-page">
      <div className="container">
        <h1 className="mt-4 text-center">{recipe?.name}</h1>

        {/* Thông tin người dùng. */}
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mb-2">
            <span className="material-icons">account_circle</span>
            <span className="mx-1">by</span>
            <strong>{account?.name}</strong>
          </div>
        </div>

        {/* Hiển thị ảnh và description. */}
        <div className="row">
          <div className="col-md-12 text-center">
            {
              `${recipe?.image}`.trim().length > 0 && recipe?.image !== undefined ?
                <img src={`${REACT_APP_UPLOADS}/${recipe?.image}`} className="img-fluid" alt={recipe?.name} />
                : <svg className="bd-placeholder-img" width="100%" height="300" role="img" focusable="false">
                  <title>ERROR LOAD IMAGE</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">ERROR LOAD IMAGE</text>
                </svg>
            }
          </div>
          <p className="text-left">
              {recipe?.description}
            </p>
        </div>

        {/* Hiển thị nguyên liệu. */}
        <h2 className="mt-4 h1">Ingredients</h2>
        <ul className="list-group" style={{ marginBottom: '1rem' }}>
          {
            ingredients.map((ing, index) => {
              return (
                <IngredientItem
                  key={index}
                  ing={ing}
                  index={index} />
              )
            })
          }
        </ul>

        {/* hiển thị các bước thực hiện. */}
        <h2 className="mt-4 h1">Directions</h2>
        <div className="row">
          {
            steps.map((step, index) => {
              return (
                <React.Fragment key={index}>
                  <DirectionItem
                    step={step} index={index} />
                </React.Fragment>
              )
            })
          }
        </div>

        {/* Hiển thị bình luận. */}
        <h2 className="mt-4 h1">Reviews</h2>
        <div className="row">
          {
            comments.map((comment, index) => {
              return (
                <React.Fragment key={index}>
                  <CommentItem
                    comment={comment}
                    id={comment.account_id} />
                </React.Fragment>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}
