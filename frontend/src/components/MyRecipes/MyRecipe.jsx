import React from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
const myRecipe = {
    recipe: {"background":"#fff"}
}
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
