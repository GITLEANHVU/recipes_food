import React, { useEffect, useState } from 'react'
import './MyRecipe.css'

export default function Search(props) {
    return (
        <div className="search-recipe">
            <div id="big-title">
                Make
                <div id="flip">
                    <div><div>Your Life</div></div>
                    <div><div>More</div></div>
                    <div><div>Become</div></div>
                </div>
                AweSoMe!
            </div>
            <div className="search-by">
                <h4 className="title">Tìm kiếm tên công thức món ăn</h4>
                <div className="search-form">
                    <div id="box-search">
                        <div className="search-input">
                            <input
                            onChange={e => props.onSearchKeyChanged(e.target.value)}

                            type="text" className="query" id="txt-search-on-page" />
                            <button 
                            onClick={() => props.handleSubmit()}
                            type="submit" className="btnSearch sprite2" id="btn-search-on-page">
                                <svg aria-hidden="true" className="searchBtn" viewBox="0 0 512 512">
                                    <path fill="#FE5F55" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
