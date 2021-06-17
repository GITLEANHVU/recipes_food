import React, { useState,useEffect, useContext } from 'react'
import './style.css';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import ListCard from './ListCard';
import Category from './Category';


export default function ListRecipe() {
    const [cardname, setcard] = useState([]);

    const URL = `${process.env.REACT_APP_API_TTHT_DELETE_RECIPE}`;
    const URLR = `${process.env.REACT_APP_API_TTHT_READ_RECIPE}`;

    useEffect(() => {
        async function fectlist() {
            const response = await fetch(URLR);
            const reponseJSON = await response.json();
            // console.log(reponseJSON)

            const data = reponseJSON;
            setcard(data);

        }
        fectlist();
    }, []);

    // delete
    const handleDelete = (id) => {
        console.log(id);
        const newData = cardname.filter(item => item.id !== id)
        setcard(newData)

        // const newData = item.id;
        // console.log(cardname.id);
        // axios.post(URL, newData)
        //     .then(res => {
        //         this.setState(prevState => ({
        //             news: prevState.news.filter(el => el.id !== cardname.id)
        //         }));
        //     })
        //     .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div className="row" id="row-search" style={{ marginTop: "0" }}>
                <div className="fromsearch" method="get">
                    <input className="search_input" type="text" placeholder="search" />
                    <button className="submit_buttom" type="submit">
                        <svg viewBox="0 0 56.966 56.966" width="18" height="20">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <p className="show_search"></p>
            </div>
            <Category></Category>

            <div className="row" style={{marginTop: "40px"}}>
                <ListCard cardname={cardname} setData={handleDelete} />
            </div>
        </div>
    )
}

