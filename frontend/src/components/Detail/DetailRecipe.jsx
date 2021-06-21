
import React, { useState, useEffect, useContext } from 'react';
import './DetailRecipe.css';
import CommentRecipe from './Comments.jsx'
import AccountInfo from './AccountInfo.jsx'
import { useHistory, useParams } from 'react-router-dom';
import { API_LINK_COMMENT_READ_SINGLE, API_LINK_ACCOUNT_BY_ID, API_LINK_RECIPE_READ_BY_ID, REACT_APP_UPLOADS, API_LINK_RECIPE_DELETE, API_LINK_RECIPE_READ_ALL } from '../../api_link';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function DetailRecipe() {
    const history = useHistory();
    const [auth] = useContext(AuthContext);
    const [colorHeart, setColorHeart] = useState('black');
    const [comments, setComments] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [account, setAccount] = useState({
        name: "",
        email: "",
        address: "",
    });
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
        async function fetchListRecipe() {
            const response = await fetch(API_LINK_RECIPE_READ_ALL);
            const result = await response.json();
            setRecipes(result);
        }
        fetchListRecipe();
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
    //console.log("Comments detail: ",comments);
    const mouseHover = (e) => {

        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);

    };
    //hàm xóa
    const deleteRecipe = (id) => {
        // delete from database
        async function fetchDeleteRecipe(url, id) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ id: id })
            });
            return await response.json();
        }
        fetchDeleteRecipe(API_LINK_RECIPE_DELETE, id)
            .then(result => {
                //console.log("Ket qua: ", result.message);
                const filterData = recipes.filter(item => item.id !== id)
                setRecipe(filterData)
            })
        history.push('/login')
    }
    return (

        <div className="detailRecipe">
            <div className="container" id="contain">
                <div className="row g-2 contentTop">
                    <div className="col-4 sm-3">
                        <div className="imgRecipeBox">
                            <div className="imgRecipe">
                                <img className="img-detail" src={recipe.image} alt={recipe.name} />
                            </div>
                        </div>
                        <div className="status">
                            <button onClick={() => { setColorHeart("red") }} className="bt heart"><i className="fas fa-heart" style={{ color: colorHeart }}></i></button>
                            {
                                auth.isAuth ? auth.user.id === recipe.account_id &&
                                    (
                                        <div>
                                            <button className="bt editRecipe">
                                                <Link to={`/au-recipe/${recipe.id}`}>
                                                    <i className="far fa-edit" id="edt"></i>
                                                </Link>
                                            </button>
                                            <button className="bt deleteRecipe" onClick={() => deleteRecipe(recipe.id)}><i className="fas fa-trash"></i></button>
                                        </div>
                                    )
                                    : ""
                            }
                        </div>
                    </div>
                    <div className="col-8 sm-9">
                        <div className="p-3 border bg-light2">
                            <h3 className="namRecipe-detail">{recipe.name}</h3>

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
                            <h3 className="namRecipe-detail">Nguyên liệu</h3>
                            <div className="hoverList">
                                <ol className="list-group" id="lisIngredients">
                                    {
                                        recipe.ingredients.map((item) => <li key={item}><span>{item} </span></li>)//
                                        
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                    <button className="tutorial" onMouseOver={mouseHover} onMouseOut={mouseHover}><span>Hướng dẫn chế biến</span></button>
                    <div className="row g-2 boderTutorial">
                        <div className="col-12" id="stepsDes">
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

                <CommentRecipe comments={comments} setComments={setComments} recipe_id={recipe.id} />
            </div>
        </div>
    )
}
