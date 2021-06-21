import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import Pagination from './Pagination';
import { AuthContext } from '../../Contexts/AuthContext';
import { API_LINK_RECIPE_DELETE, API_LINK_RECIPE_READ_BY_ACCOUNT, API_LINK_RECIPE_RECIPE_BY_NAME_ACCOUNT } from '../../api_link';
import { useHistory } from 'react-router-dom';

export default function MyRecipe() {
    const history = useHistory();
    const [auth] = useContext(AuthContext);
    const [recipes, setRecipes] = useState([])
    const account_id = auth.user.id ? auth.user.id : "";

    const [tempRecipes, setTempRecipe] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const URL_SEARCH = API_LINK_RECIPE_RECIPE_BY_NAME_ACCOUNT

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    // Get current posts # 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState([]);


    useEffect(() => {
        if (auth.isAuth === false) {
            history.push("/");
        }

        const fetchRecipes = async (url) => {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ account_id: account_id })
            });
            return await response.json();
        }
        fetchRecipes(API_LINK_RECIPE_READ_BY_ACCOUNT)
            .then(result => {
                setRecipes(result)
                setCurrentPosts(result.slice(indexOfFirstPost, indexOfLastPost))
            })
    }, [auth])

    useEffect(() => {
        if (searchKey.length > 0) {

            if (tempRecipes.length > 0) {
                setCurrentPosts(tempRecipes.slice(indexOfFirstPost, indexOfLastPost))
            }
        } else {
            setCurrentPosts(recipes.slice(indexOfFirstPost, indexOfLastPost))
            // setCurrentPage(1)
        }

    }, [currentPage, searchKey, tempRecipes])

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

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
                console.log("Ket qua: ", result.message);
                const filterData  = recipes.filter(item => item.id !== id)
                setRecipes(filterData)
            })
        
    }
    return (
        <div id="recipe">
            <div className="container">
                <Search onSearchKeyChanged={onSearchKeyChanged} handleSubmit={handleSubmit} />
                {/* <RecipeList recipes={tempRecipes.length === 0 ? currentPosts : tempRecipes} setRecipes={setRecipes} /> */}
                <RecipeList recipes={currentPosts } setRecipes={setRecipes} deleteRecipe={deleteRecipe}/>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={tempRecipes.length > 0 ? tempRecipes.length : recipes.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
