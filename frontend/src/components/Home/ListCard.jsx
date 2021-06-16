import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function ListCard(props) {

    const [cardname, setcard] = useState([]);

    const URL = `${process.env.REACT_APP_API_TTHT_READ_RECIPE}`;

    useEffect(() => {
        console.log(URL)
        async function fectlist() {
            const response = await fetch(URL);
            const reponseJSON = await response.json();
            console.log(reponseJSON)

            const data = reponseJSON;
            setcard(data);

        }
        fectlist();
    }, []);

    const newData = props.setData;
    const result = cardname.map((item) => <Card key={item.id} handleDelete={newData} recipe={item} />)
    return result;
}
