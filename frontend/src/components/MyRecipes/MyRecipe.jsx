import React from 'react'
import Search from './Search'
import RecipeList from './RecipeList'

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
