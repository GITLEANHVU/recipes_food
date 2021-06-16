import React, { useState, useContext } from 'react'
import './style.css';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import ListCard from './ListCard';
import Category from './Category';


export default function ListRecipe() {
    const [data, setData] = useState([
        { id: "1", userID: 1, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1214036954-1-238x238.jpg", name: "Pizza Bianca", description: "Garlic Flatbread with Mozzarella Parmesan · Garlic · Rosemary" },
        { id: "2", userID: 2, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1215178083-1-238x238.jpg", name: "Amandine", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
        { id: "3", userID: 1, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1048717514-1-238x238.jpg", name: "American Wagyu", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
        { id: "4", userID: 2, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1207476969-1-238x238.jpg", name: "Chocolate cake", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
        { id: "5", userID: 1, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1214036954-1-238x238.jpg", name: "Pizza Bianca", description: "Garlic Flatbread with Mozzarella Parmesan · Garlic · Rosemary" },
        { id: "6", userID: 2, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1215178083-1-238x238.jpg", name: "Amandine", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
        { id: "7", userID: 1, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1048717514-1-238x238.jpg", name: "American Wagyu", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
        { id: "8", userID: 2, img: "https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-1207476969-1-238x238.jpg", name: "Chocolate cake", description: "Garlic Flatbread with Mozzarella  Parmesan · Garlic · Rosemary" },
    ])

    

    // delete
    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id)
        setData(newData)
    }

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="container">
            <div className="row" id="row-search" style={{ marginTop: "0" }}>
                <div className="fromsearch" method="get">
                    <input className="search_input" type="text" placeholder="search" onChange={Event => { setSearchTerm(Event.target.value) }} />
                    <button className="submit_buttom" type="submit">
                        <svg viewBox="0 0 56.966 56.966" width="18" height="20">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <p className="show_search"></p>
            </div>
            <Category></Category>

            <div className="row">
                <ListCard data={data} setData={handleDelete} />
            </div>
        </div>
    )
}

