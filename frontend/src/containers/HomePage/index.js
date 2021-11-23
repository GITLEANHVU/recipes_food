import React, { useEffect, useState } from 'react'
import { API_LINK_RECIPE_READ_BY_PAGE, REACT_APP_UPLOADS } from '../../api_link';
import axios from 'axios'
import Carousel from '../../components/carousel';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = { page: 1, perPage: 3 };
    axios.post(`${API_LINK_RECIPE_READ_BY_PAGE}`, JSON.stringify(data))
      .then(response => {
        setRecipes(response.data);
      });
  }, []);

  return (
    <div id="home-page">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <Carousel />
      </div>

      <div className="container marketing">
        <hr className="featurette-divider" />
        {
          recipes.map((recipe, index) => {
            return (
              <React.Fragment key={index}>
                <div className="row featurette">
                  <div className={`col-md-7${(index + 1) % 2 === 0 ? " order-md-2" : ""}`}>
                    <Link
                      style={{
                        fontSize: `calc(1.375rem + 1.5vw)`,
                        textDecoration: "none",
                        color: "#5a5a5a",
                        display: "inline-block",
                        marginBottom: "0.8rem",
                      }}
                      className="featurette-heading mt-0"
                      to={`/recipe/${recipe?.id}`}>
                      {recipe.name}
                    </Link>
                    <p className="lead"
                      style={{ fontSize: `1.25rem` }}>{recipe.description}</p>
                  </div>
                  <div className={`col-md-5 ${(index + 1) % 2 === 0 ? " order-md-1" : ""}`}>
                    <img src={`${REACT_APP_UPLOADS}/${recipe.image}`} className="featurette-image img-fluid mx-auto" alt={recipe.name} />
                  </div>
                </div>
                <hr className="featurette-divider" />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}
