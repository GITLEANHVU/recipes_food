import React, { useState, useEffect } from 'react';
import { API_LINK_RECIPE_READ_ALL } from '../../api_link';
import Card from './Card';

export default function ListCard(props) {

    const [cardName, setCardName] = useState([]);
    const URL = API_LINK_RECIPE_READ_ALL

    useEffect(() => {
        async function fetchAllRecipes() {
            const response = await fetch(URL);
            const data = await response.json();
            setCardName(data);
        }
        fetchAllRecipes();
    }, []);

    const newData = props.setData;
    const result = cardName.map((item) => <Card key={item.id} handleDelete={newData} recipe={item} />)
    return result;
}
