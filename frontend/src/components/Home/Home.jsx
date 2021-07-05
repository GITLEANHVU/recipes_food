import React, { useEffect, useState } from 'react'
import { API_LINK_RECIPE_READ_ALL, API_LINK_RECIPE_READ_BY_CATEGORY, API_LINK_RECIPE_RECIPE_BY_NAME, API_LINK_RECIPE_DELETE } from '../../api_link';
import Search from './Search';
import Category from './Category';
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

    //delete

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
                const filterData = recipes.filter(item => item.id !== id)
                setRecipes(filterData)
            })

    }
    const onSearchKeyChanged = (value) => {
        setSearchKey(value);
    }

    const handleSubmit = () => {
        // submit to search recipes
        if (searchType === "name") {
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
                })
        } else {
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
                })
        }
    }

    return (
        <div className="">
            <div className="background-welcom">
                    <p className="well-com">Well com to my recipe food</p>
                </div>
            <div className="container">
                <div className="search-category">
                    <Category setSearchType={setSearchType} setCategoryValue={setCategoryValue} />
                    <Search onSearchKeyChanged={onSearchKeyChanged} handleSubmit={handleSubmit} />
                </div>

                <div className="container mt-4">
                    {<TestCard recipes={tempRecipes.length > 0 ? tempRecipes : recipes} deleteRecipe={deleteRecipe} />}
                </div>
            </div>
        </div>

    )
}
