
import React, { useState, useEffect } from 'react';
import './DetailRecipe.css';
import CommentRecipe from './Comment.jsx'
import { useParams } from 'react-router-dom';

export default function DetailRecipe() {
    const [colorHeart, setColorHeart] = useState('black');
    const [recipe, setRecipe] = useState([]);
    const URL = `${process.env.REACT_APP_API_TTMT_READ}`;
    const URLIMAGE = `${process.env.REACT_APP_UPLOADS}`;
    const { id } = useParams();
    var idRecipe = parseInt(id, 10);
    //console.log(id);
    useEffect(() => {
        // lay du lieu tu db
        async function fetchRecipeById() {
            const response = await fetch(URL);
            const responseJS = await response.json();
            //console.log(responseJS);
            setRecipe(responseJS);
        }
        // set du lieu cho state
        fetchRecipeById();
    }, [])

    function splitRecipe(a) {
        a.split('#');
    }
    // mỗi thằng chứa 2 time riêng
    return (
        <div className="detailRecipe">
            <div className="container">
                {recipe.map((recipeId) => {
                    if (recipeId.id === idRecipe) {
                        return (
                            <div className="row g-2 contentTop" key={recipeId.id}>
                                <div className="col-4 sm-3">
                                    <div className="imgRecipeBox">
                                        <div className="imgRecipe">
                                            <img className="img-detail" src={`${URLIMAGE}/${recipeId.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="status">
                                        <button onClick={() => { setColorHeart("red") }} className="btn heart"><i className="fas fa-heart" style={{ color: colorHeart }}></i></button>
                                        <button className="btn editRecipe"><i className="far fa-edit"></i></button>
                                        <button className="btn deleteRecipe"><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                                <div className="col-8 sm-9">
                                    <div className="p-3 border bg-light2">
                                        <h3>{recipeId.name}</h3>
                                        <div className="chef">
                                            <p className="nameChef"><i className="fas fa-user-edit"></i> Nguyên Văn An</p>
                                            <p className="dateRecipe"><i className="fas fa-calendar-alt"></i> 06/06/2021</p>
                                        </div>
                                        <p className="descriptionRecipe">{recipeId.description}</p>
                                        <h3>Nguyên liệu</h3>
                                        <ol className="list-group list-group-numbered">
                                            <li className="list-group-item">{recipeId.ingredients}</li>
                                        </ol>
                                    </div>
                                </div>
                                <span className="tutorial">Hướng dẫn chế biến</span>
                                <div className="row g-2 boderTutorial">
                                    {/* <div className="col-3">
                                    <h5 className="step">Các bước thực hiện</h5>
                                </div> */}
                                    <div className="col-12 ">
                                        <div className="description">
                                            <ol className="list-step">
                                                <li>{splitRecipe(recipeId.steps)}</li>
                                                {/* { splitRecipe(recipeId.steps).map((item)=>{
                                                    return (
                                                        <li>
                                                            {}
                                                        </li>
                                                    )
                                                })
                                                } */}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                <CommentRecipe />
            </div>
        </div>
    )
}
