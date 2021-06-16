import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import { AuthContext } from '../../Contexts/AuthContext';

export default function MyRecipe() {
    const api_url = process.env.REACT_APP_API_TTMT_READ;
    const [recipes, setRecipes] = useState([])
    const [auth] = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const account_id = auth.user.id;


    useEffect(() => {
        const fetchRecipes = async (url) => {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ account_id: account_id })
            });
            return await response.json();
        }
        fetchRecipes(api_url)
            .then(result => {
                setRecipes(result)
            })
    }, [])

    // lần nào hàm này cũng chạy khi các giá trị key hoặc type thay đổi
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
   
    return (
        <div id="recipe">
            <div className="container">
                <Search searchTerm={recipes} setSearchTerm={handleChange} />
                {/* search={search} setSearch={setSearch} handleSearch={handleSearch} */}
                <RecipeList recipes={recipes} setRecipes={setRecipes} />
            </div>
        </div>
    )
}
