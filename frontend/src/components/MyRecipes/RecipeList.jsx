import React from 'react'
import './MyRecipe.css'
import Card from './Card';

export default function RecipeList(props) {
    let recipes = props.recipes;

    // const allRecipes = props.allRecipes
    // console.log("all recipes passed: ", allRecipes);
    // delete recipe
    // const deleteRecipe = (id) => {
    //     console.log("deleted");
    //     const newData = allRecipes.filter(item => item.id !== id)
    //     console.log("New data", newData);
    //     recipes = [...newData].slice(0, 5);
    // }
    return (
        <div className="recipe-product recipe-list">
            <div className="container">
                <div className="row">
                    {
                        recipes.map((value, index) => <Card key={index} handleDelete={props.deleteRecipe} recipe={value} />)
                    }
                </div>
            </div>
        </div>
    )
}
