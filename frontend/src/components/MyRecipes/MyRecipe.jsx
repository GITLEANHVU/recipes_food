import React from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import '../MyRecipes/MyRecipe.css';
export default function MyRecipe() {
    return (
        <div id="recipe">
            <div className="container">
            <Search />
            <RecipeList/>
            </div>
        </div>
    )
}
