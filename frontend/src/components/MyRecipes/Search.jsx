import React, { useState } from 'react'
import './search.css'
const searchStyle = {
    "search-recipe" :{"display":"flex","justifyContent":"center","marginTop":"80px"},
    title: { "fontSize": "3rem", "textAlign": "center", "color": "orange", "fontFamily": "'Courgette', cursive" },
}
 
export default function Search() {
    const [isClick, setIsClick] = useState(false);

    return (
        <div className="search-recipe"  style={searchStyle['search-recipe']}>
            <h3 className="title" style={searchStyle.title}>Search Recipes</h3>
            <div className={isClick ? "search-wrapper active" : "search-wrapper"}>
                <div className="inputHolder">
                    <input type="text" className="searchInput" placeholder="Type to search" />
                    <button className="search-icon" onClick={e => setIsClick(!isClick)}>
                    <svg aria-hidden="true" style={{"width":"28px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FE5F55" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                        <span /></button>
                </div>
                <span className="close" onClick={e => setIsClick(!isClick)} />
            </div>
        </div>
    )
}
