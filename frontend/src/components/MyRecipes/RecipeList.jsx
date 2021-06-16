import React, { useState } from 'react'
import './MyRecipe.css'
import Card from './Card';
export default function RecipeList(props) {
    const recipes = props.recipes;

    // radio button click event
    const [rbtName, setRbtName] = useState(false)
    const [rbtCate, setRbtCate] = useState(false);

    function radioChange() {
        if (rbtName) {
            return 'name';
        }
        if (rbtCate) {
            return 'category';
        }
    }

    // delete recipe
    const deleteRecipe = (id) => {
        const newData = recipes.filter(item => item.id !== id)
        props.setRecipes(newData)
    }

    return (
        <div className="col-12 col-md-12 col-sm-12 recipe-list">
            <div className="row sortGroup">
                <div className="col-12 col-md-12 col-sm-12">
                    <div className="box-sort-by" >
                        <span className="sort-by" >Sắp xếp theo:</span>
                        <ul className="sort-list" >
                            <li className="sort-item">
                                <a href="###" className="sort-link products-sort-order" >
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rbtMenuName"
                                        checked={rbtName}
                                        onChange={e => {
                                            setRbtName(true);
                                            setRbtCate(false);
                                            props.setSearch({ ...props.search, type: e.target.id })
                                            props.handleSearch();
                                        }} />

                                    <label className="form-check-label" htmlFor="rbtMenuName">
                                        Tên công thức
                                    </label>

                                </a>
                            </li>
                            <li className="sort-item">
                                <a href="###" className="sort-link products-sort-order" >
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rbtMenuCate"
                                        checked={rbtCate}
                                        onChange={e => {
                                            setRbtName(false);
                                            setRbtCate(true);
                                            props.setSearch({ ...props.search, type: e.target.id })
                                            props.handleSearch();
                                        }} />
                                        
                                    <label className="form-check-label" htmlFor="rbtMenuCate">
                                        Loại công thức
                                    </label>
                                </a>
                                {radioChange() === 'category' && (
                                    <select className="listCate" >
                                        <option className="cate-item">Food </option>
                                        <option className="cate-item">Vegetable </option>
                                        <option className="cate-item">Fruit </option>
                                    </select>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="recipe-product">
                <div className="container">
                    <div className="row">
                        {
                            recipes.map((value, index) => <Card key={index} handleDelete={deleteRecipe} recipe={value} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
