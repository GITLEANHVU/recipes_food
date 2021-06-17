
import React, { useState, useEffect, useContext } from 'react';
import './DetailRecipe.css';
import CommentRecipe from './Comment.jsx'
import AccountInfo from './AccountInfo.jsx'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext'

export default function DetailRecipe() {
    const [auth, setAuth] = useContext(AuthContext);
    const [colorHeart, setColorHeart] = useState('black');
    const [recipe, setRecipe] = useState([]);
    const [account, setAccout] = useState([]);
    const [comment, setComment] = useState([]);
    const URL = `${process.env.REACT_APP_API_NNT_READ}`;
    const URLIMAGE = `${process.env.REACT_APP_UPLOADS}`;
    const URLACOUNT = `${process.env.REACT_APP_API_NNT_READ_ACCOUNT}`;
    const URLCOMMENT = `${process.env.REACT_APP_API_NNT_READ_SINGLE}`;
    const { id } = useParams();
    const idRecipe = parseInt(id, 10);

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
    }, []);

    useEffect(() => {
        // lay du lieu tu db
        async function fetchAccountById() {
            const response = await fetch(URLACOUNT);
            const responseJS = await response.json();
            //console.log(responseJS);
            setAccout(responseJS);
        }
        // set du lieu cho state
        fetchAccountById();
    }, [])

    useEffect(() => {
        const fetchCommentByRecipeID = async (url) => {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ recipe_id: idRecipe })
            });
            return await response.json();
        }
        fetchCommentByRecipeID(URLCOMMENT)
            .then(result => {
                setComment(result)
            })
    }, [])
    console.log(comment);
    //tach chuoi
    function splitRecipe(a) {
        const temp = a.split('#');
        return temp;
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
                                            {account.map((account_content) => {
                                                if (recipeId.account_id === account_content.id) {
                                                    return (
                                                        <button className="nameChef" data-bs-toggle="modal" data-bs-target="#accounntInfo" key={account_content.id}><i className="fas fa-user-edit"></i> {account_content.name}</button>
                                                    )
                                                }
                                            })}
                                            <AccountInfo/>
                                            <p className="dateRecipe"><i className="fas fa-calendar-alt"></i> {recipeId.created_at}</p>
                                        </div>
                                        <p className="descriptionRecipe">{recipeId.description}</p>
                                        <h3>Nguyên liệu</h3>
                                        <ol className="list-group list-group-numbered">
                                            {/* <li className="list-group-item">{recipeId.ingredients}</li> */}
                                            {splitRecipe(recipeId.ingredients).map((item) => {
                                                return (
                                                    <li key={item} className="list-group-item">
                                                        {item}
                                                    </li>
                                                )
                                            })
                                            }
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
                                            <ol className="list-group list-group-numbered">
                                                {splitRecipe(recipeId.steps).map((item) => {
                                                    return (
                                                        <li key={item} className="list-group-item">
                                                            {item}
                                                        </li>
                                                    )
                                                })
                                                }
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
