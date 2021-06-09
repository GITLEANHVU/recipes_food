import React, { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { AuthContext } from '../../Contexts/AuthContext';
export default function RecipeList() {
    const [auth, setAuth] = useContext(AuthContext);
    const [initialData, setInitialData] = useState([
        { id: 0, userID: 1  ,title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 1, userID: 1  ,title: "Jeera rice recipe (Cumin Rice Recipe)", description: "Jeera rice recipe is a one-pot dish is a flavored dish the usage of with saute rice with ghee,cumin seed flavored are the principle flavored withinside the rice and entire spice and herb to make it extra flavored.Cumin seeds also are called jeera in URDU languages.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/06/Jeera-rice-recipe-Cumin-Rice-Recipe-1024x768.jpg` },
        { id: 2, userID: 4  ,title: "Apple Milkshake", description: "Make this Apple milkshake using basic ingredients.This simple combination of whip cream and apple shake is outstanding.This Milkshake is top with cool whip cream along with a subtle taste from cream.It is my favourite shake ever.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Apple-Milkshake-2-1024x768.jpg` },
        { id: 3, userID: 2  ,title: "Banana Milkshake Recipe|How to make a banana shake recipe", description: "Banana Milkshake Recipe is a creamy and greater healthful delicious thick shake that is ready with simply components like Banana, Milk and to make this recipe. This beverage may be very cooling and the right shake for a warm summer time season day.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Banana-Milkshake-RecipeHow-to-make-a-banana-shake-recipe-3-1024x768.jpg` },
        { id: 4, userID: 3  ,title: "Chikoo Milkshake Recipe |Sapota shake recipe|", description: "Chikoo milkshake recipe is a healthy and so delectable flavor during with month of RAMADAN. The natural fructose and sucrose content in sapota(CHIKOO)can give your body a lot of instant source of energy. Chikoo contain a high amount of vitamine A.Chikoo is a controlling high blood pressure.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chikoo-Milkshake-Recipe-Sapota-shake-recipe-768x1024.jpg` },
        { id: 5, userID: 14  ,title: "Pyaz Pakora (Onion fritters)", description: "Onion Pakora is one of themaximumscrumptious and highly spiced snacks made with gram flour, onion, coriander, green chili, and highly spiced.These fritters flavor even higherwhile served with scrumptious tangy chutney. It is likewise an importanta part of the iftar table in Ramadan.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/04/onion-pakora-1024x768.jpg` },
    ])
    const listCards = () => {
        const result = initialData.map((value, index) =>
            <div className="col-md-4" key={index}>
                <div className="card"  >
                    <img src={value.imageLink} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <div className="content">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text">{value.description}</p>
                        </div>
                        <div className="btn-group">
                            <a href="###" className="btn btn-primary btn-show">Show detail</a>
                            {
                                auth.isAuth ? auth.user.id === value.userID && (
                                    <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="###" className="btn btn-warning"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="###" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                    </div>
                                )
                                    : ""
                                
                            }
                            
                        </div>

                    </div>
                </div>
            </div>
        );
        if (result.length !== 0) {
            return result
        }
        return [];
    }

    return (
        <div className="col-12 recipe-list">
            <div className="row">
                <div className="col-12">
                    <h2 className="recipe-title">RECIPE LIST</h2>
                    <div className="box-sort-by">
                        <span className="sort-by">Sort by:</span>
                        <ul className="sort-list">
                            <li className="sort-item">

                                <a href="###" className="sort-link products-sort-order">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Recipe name
                                    </label>
                                </a>
                            </li>
                            <li className="sort-item">
                                <a href="###" className="sort-link products-sort-order">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rbtMenuCate" />
                                    <label className="form-check-label" htmlFor="rbtMenuCate">
                                        Recipe category
                                    </label>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row" >
                {listCards()}
            </div>
        </div>
    )
}
