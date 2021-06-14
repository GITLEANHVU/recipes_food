import React, { useState, useContext } from 'react'
import RenderListCards from './RenderListCards'
import './MyRecipe.css'
export default function RecipeList() {
    const [initialData, setInitialData] = useState([
        { id: 1, userID: 1, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 2, userID: 1, title: "Jeera rice recipe (Cumin Rice Recipe)", description: "Jeera rice recipe is a one-pot dish is a flavored dish the usage of with saute rice with ghee,cumin seed flavored are the principle flavored withinside the rice and entire spice and herb to make it extra flavored.Cumin seeds also are called jeera in URDU languages.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/06/Jeera-rice-recipe-Cumin-Rice-Recipe-1024x768.jpg` },
        { id: 3, userID: 4, title: "Apple Milkshake", description: "Make this Apple milkshake using basic ingredients.This simple combination of whip cream and apple shake is outstanding.This Milkshake is top with cool whip cream along with a subtle taste from cream.It is my favourite shake ever.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Apple-Milkshake-2-1024x768.jpg` },
        { id: 4, userID: 2, title: "Banana Milkshake Recipe|How to make a banana shake recipe", description: "Banana Milkshake Recipe is a creamy and greater healthful delicious thick shake that is ready with simply components like Banana, Milk and to make this recipe. This beverage may be very cooling and the right shake for a warm summer time season day.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Banana-Milkshake-RecipeHow-to-make-a-banana-shake-recipe-3-1024x768.jpg` },
        { id: 5, userID: 3, title: "Chikoo Milkshake Recipe |Sapota shake recipe|", description: "Chikoo milkshake recipe is a healthy and so delectable flavor during with month of RAMADAN. The natural fructose and sucrose content in sapota(CHIKOO)can give your body a lot of instant source of energy. Chikoo contain a high amount of vitamine A.Chikoo is a controlling high blood pressure.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chikoo-Milkshake-Recipe-Sapota-shake-recipe-768x1024.jpg` },
        { id: 6, userID: 14, title: "Pyaz Pakora (Onion fritters)", description: "Onion Pakora is one of themaximumscrumptious and highly spiced snacks made with gram flour, onion, coriander, green chili, and highly spiced.These fritters flavor even higherwhile served with scrumptious tangy chutney. It is likewise an importanta part of the iftar table in Ramadan.", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/04/onion-pakora-1024x768.jpg` },
    ])


    // radio button click event
    const [rbtName, setRbtName] = useState(false)
    const [rbtCate, setRbtCate] = useState(false);

    function radioChange() {
        if (rbtName) {
            return 'name';
        }
        if (rbtCate) {
            return 'category';
        }
    }
    // delete recipe
    const deleteRecipe = (id) => {
        const newData = initialData.filter(item => item.id !== id)
        setInitialData(newData)
    }

    return (
        <div className="col-12 col-md-12 col-sm-12 recipe-list">
            <div className="row sortGroup">
                <div className="col-12 col-md-12 col-sm-12">
                    <div className="box-sort-by" >
                        <span className="sort-by" >Sắp xếp theo:</span>
                        <ul className="sort-list" >
                            <li className="sort-item">
                                <a href="###" className="sort-link products-sort-order" >
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rbtMenuName" checked={rbtName} onChange={e => { setRbtName(true); setRbtCate(false) }} />
                                    <label className="form-check-label" htmlFor="rbtMenuName">
                                        Tên công thức
                                    </label>

                                </a>
                            </li>
                            <li className="sort-item">
                                <a href="###" className="sort-link products-sort-order" >
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rbtMenuCate" checked={rbtCate} onChange={e => { setRbtName(false); setRbtCate(true) }} />
                                    <label className="form-check-label" htmlFor="rbtMenuCate">
                                       Loại công thức
                                    </label>
                                </a>
                                {radioChange() === 'category' && (
                                    <select className="listCate" >
                                        <option className="cate-item">Food </option>
                                        <option className="cate-item">Vegetable </option>
                                        <option className="cate-item">Fruit </option>
                                    </select>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="recipe-product">
                <div className="container">
                    <div className="row">
                        <RenderListCards initialData={initialData}  setInitialData={deleteRecipe}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
