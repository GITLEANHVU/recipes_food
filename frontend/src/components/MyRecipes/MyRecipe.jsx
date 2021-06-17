import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import { AuthContext } from '../../Contexts/AuthContext';
import { API_LINK_RECIPE_READ_BY_ACCOUNT, API_LINK_RECIPE_RECIPE_BY_NAME_ACCOUNT } from '../../api_link';

export default function MyRecipe() {
    const URL_READ_BY_ACC = API_LINK_RECIPE_READ_BY_ACCOUNT
    const [recipes, setRecipes] = useState([])
    const [auth] = useContext(AuthContext);
    const account_id = auth.user.id;

    useEffect(() => {
        const fetchRecipes = async (url) => {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ account_id: account_id })
            });
            return await response.json();
        }
        fetchRecipes(URL_READ_BY_ACC)
            .then(result => {
                setRecipes(result)
            })
    }, [])

    const [tempRecipes, setTempRecipe] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const URL_SEARCH = API_LINK_RECIPE_RECIPE_BY_NAME_ACCOUNT

    const handleSubmit = () => {
        if (searchKey.length <= 0) {
            console.log("Khong co gia tri nao de tim kiem");
            return;
        }
        console.log("searching...");
        const fetchRecipesSearching = async (url, searchKey, account_id) => {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ searchKey: searchKey, account_id: account_id })
            });
            return await response.json();
        }
        fetchRecipesSearching(URL_SEARCH, searchKey, account_id)
            .then(result => {
                setTempRecipe(result);
            })
    }

    const onSearchKeyChanged = (value) => {
        setSearchKey(value);
        value.length === 0 ? setTempRecipe([]) : setTempRecipe(tempRecipes)
    }
    return (
        <div id="recipe">
            <div className="container">
                <Search onSearchKeyChanged={onSearchKeyChanged} handleSubmit={handleSubmit} />
                <RecipeList recipes={tempRecipes.length === 0 ? recipes : tempRecipes} setRecipes={setRecipes} />
            </div>
        </div>
    )
}
