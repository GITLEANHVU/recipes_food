import React from 'react'
import './MyRecipe.css'
import Card from './Card';
export default function RecipeList(props) {
    const recipes = props.recipes;
    // delete recipe
    const deleteRecipe = (id) => {
        const newData = recipes.filter(item => item.id !== id)
        props.setRecipes(newData)
    }
    return (
        <div className="recipe-product recipe-list">
                <div className="container">
                    <div className="row">
                        {
                            recipes.map((value, index) => <Card key={index} handleDelete={deleteRecipe} recipe={value} />)
                        }
                    </div>
                </div>
            </div>
    )
}
