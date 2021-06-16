import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import { AuthContext } from '../../Contexts/AuthContext';

export default function MyRecipe() {
    const api_url = process.env.REACT_APP_API_TTMT_READ;
    const [recipes, setRecipes] = useState([])
    const [tempRecipes, setTempRecipes] = useState(recipes)
    const [auth] = useContext(AuthContext);
    const [search, setSearch] = useState({
        type: "",
        key: ""
    });
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
                console.log(result)
                setRecipes(result)
            })
    }, [])

    // lần nào hàm này cũng chạy khi các giá trị key hoặc type thay đổi
    const handleSearch = () => {
        
        // thực hiện lấy giá trị từ backend

        // load dữ liệu vào recipes

        // nếu recipes.length < 1 thực hiện lấy toàn bộ


       // hoặc, liên hệ trang :) 
    }

    return (
        <div id="recipe">
            <div className="container">
                {console.log(search)}
                {console.log(recipes)}
                <Search setSearch={setSearch} search={search} handleSearch={handleSearch} />
                <RecipeList recipes={recipes} setRecipes={setRecipes} search={search} setSearch={setSearch} handleSearch={handleSearch} />
            </div>
        </div>
    )
}
