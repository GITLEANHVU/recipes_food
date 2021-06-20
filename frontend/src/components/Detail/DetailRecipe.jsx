
import React, { useState, useEffect } from 'react';
import './DetailRecipe.css';
import CommentRecipe from './Comments.jsx'
import AccountInfo from './AccountInfo.jsx'
import { useParams } from 'react-router-dom';
import { API_LINK_COMMENT_READ_SINGLE, API_LINK_ACCOUNT_BY_ID, API_LINK_RECIPE_READ_BY_ID, REACT_APP_UPLOADS } from '../../api_link';

export default function DetailRecipe() {
    const [colorHeart, setColorHeart] = useState('black');
    const [comments, setComments] = useState([]);
    const [account, setAccount] = useState({
        name: "",
        email: "",
        address: "",
    });
    // const [accountComment, setAccountCommet] = useState({
    //     name: "",
    //     email: "",
    //     address: "",
    // });
    const [recipe, setRecipe] = useState({
        id: null,
        name: "",
        image: "https://img.taste.com.au/z09DD4Ls/taste/2018/07/zucchini-lasagne-roll-ups-139165-1.jpg",
        description: "",
        category: "1",
        ingredients: [],
        steps: [],
        created_at: null,
        account_id: null,
    });
    const { id } = useParams();

    useEffect(() => {
        const getAccountByID = async (url, account_id) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ account_id: account_id }),
            });
            return await response.json();
        }
        //cai này là get recipe tu id san pham
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

        getRecipe(API_LINK_RECIPE_READ_BY_ID, id)
            .then(result => {
                if (result.length > 0) {
                    const value = result[0];
                    const ings = value.ingredients.split("#")
                    const stps = value.steps.split("#")

                    setRecipe({
                        id: value.id,
                        name: value.name,
                        image: `${REACT_APP_UPLOADS}/${value.image}`,
                        description: value.description,
                        category: value.category,
                        ingredients: ings,
                        steps: stps,
                        account_id: value.account_id,
                        created_at: value.created_at,
                    });

                    // sau khi co san pham thi get accout bang accout_id
                    getAccountByID(API_LINK_ACCOUNT_BY_ID, value.account_id)
                        .then(account => {
                            setAccount(account[0]);
                        });
                }
            });
            // const getAccountByComment = async (url, account_id) => {
            //     const response = await fetch(url, {
            //         method: "POST",
            //         headers: {
            //             'Accept': 'application/json;charset=UTF-8'
            //         },
            //         body: JSON.stringify({ account_id: account_id }),
            //     });
            //     return await response.json();
            // }
        //cai này t ap dung như v chỉ khác là dùng nó để lấy ra các comment của cái id recipe ấy
        const getCommentByRecipeID = async (url, recipe_id) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ recipe_id: recipe_id }),
            });
            return await response.json();
        }

        getCommentByRecipeID(API_LINK_COMMENT_READ_SINGLE, id)
            .then(result => {
                setComments(result)
            })

    }, []);
    //console.log(comment);
    return (

        <div className="detailRecipe">
            <div className="container">
                <div className="row g-2 contentTop">
                    <div className="col-4 sm-3">
                        <div className="imgRecipeBox">
                            <div className="imgRecipe">
                                <img className="img-detail" src={recipe.image} alt={recipe.name} />
                            </div>
                        </div>
                        <div className="status">
                            <button onClick={() => { setColorHeart("red") }} className="bt heart"><i className="fas fa-heart" style={{ color: colorHeart }}></i></button>
                            <button className="bt editRecipe"><i className="far fa-edit"></i></button>
                            <button className="bt deleteRecipe"><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div className="col-8 sm-9">
                        <div className="p-3 border bg-light2">
                            <h3>{recipe.name}</h3>

                            <div className="chef">
                                <button className="nameChef" data-bs-toggle="modal" data-bs-target="#accounntInfo" key={account.id}>
                                    <i className="fas fa-user-edit"></i>
                                    {" "}{account.name}
                                </button>
                                <AccountInfo account={{ ...account }} />
                                <p className="dateRecipe">
                                    <i className="fas fa-calendar-alt"></i>
                                    {"  "}{recipe.created_at}
                                </p>
                            </div>
                            <p className="descriptionRecipe">{recipe.description}</p>
                            <h3>Nguyên liệu</h3>
                            <ol className="list-group list-group-numbered">
                                {
                                    recipe.ingredients.map((item) => <li key={item} className="list-group-item">{item}</li>)
                                }
                            </ol>
                        </div>
                    </div>
                    <span className="tutorial">Hướng dẫn chế biến</span>
                    <div className="row g-2 boderTutorial">

                        <div className="col-12 ">
                            <div className="description">
                                <ol className="list-group list-group-numbered">
                                    {
                                        recipe.steps.map((item) => <li key={item} className="list-group-item">{item}</li>)
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <CommentRecipe comments={comments}/>
            </div>
        </div>
    )
}
