import React, { useEffect, useState } from 'react'
import { API_LINK_RECIPE_READ_ALL, API_LINK_RECIPE_READ_BY_CATEGORY, API_LINK_RECIPE_RECIPE_BY_NAME } from '../../api_link';
import Search from './Search';
import Category from './Category';
import Card from './Card';
import TestCard from './TestCard';
import './style.css';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [tempRecipes, setTempRecipes] = useState([]);

    const [searchKey, setSearchKey] = useState("");
    const [searchType, setSearchType] = useState("name");
    const [categoryValue, setCategoryValue] = useState(1);

    // lay toan bo recipe ve.
    useEffect(() => {
        async function fetchAllRecipes(url) {
            const response = await fetch(url);
            const data = await response.json();
            setRecipes(data);
        }
        fetchAllRecipes(API_LINK_RECIPE_READ_ALL);
    }, []);

    const deleteRecipe = (id) => {
        const newData = recipes.filter(item => item.id !== id)
        setRecipes(newData);

        // delete from database

    }
    const onSearchKeyChanged = (value) => {
        setSearchKey(value);
    }

    const handleSubmit = () => {
        // submit to search recipes
        if (searchType === "name") {
            console.log("searching by name ...");
            if (searchKey.length === 0) return;
            async function fetchAllRecipesByName(url, name) {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify({ name: name })
                });
                return await response.json();
            }
            fetchAllRecipesByName(API_LINK_RECIPE_RECIPE_BY_NAME, searchKey)
                .then(result => {
                    setTempRecipes(result);
                    console.log(result);
                })
        } else {
            console.log("searching by category ...");
            console.log(categoryValue)
            async function fetchAllRecipesByCategory(url, category_id) {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify({ category_id: category_id })
                });
                return await response.json();
            }
            fetchAllRecipesByCategory(API_LINK_RECIPE_READ_BY_CATEGORY, categoryValue)
                .then(result => {
                    setTempRecipes(result);
                    console.log(result);
                })
        }
    }

    return (
        <div className="container">
            <Search onSearchKeyChanged={onSearchKeyChanged} handleSubmit={handleSubmit} />
            <Category setSearchType={setSearchType} setCategoryValue={setCategoryValue}></Category>
            {/* <div className="row mt-4">
                {
                    tempRecipes.length > 0 ?
                        tempRecipes.map(item => <Card key={item.id} handleDelete={deleteRecipe} recipe={item} />)
                        :
                        recipes.map(item => <Card key={item.id} handleDelete={deleteRecipe} recipe={item} />)
                }
            </div> */}


            <div className="container mt-4">
                {<TestCard recipes={tempRecipes.length > 0 ? tempRecipes : recipes} />}
            </div>
        </div>
    )
}
