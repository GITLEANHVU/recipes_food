import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function ListCard(props) {

    const [cardname, setcard] = useState([]);

    const URL = `${process.env.REACT_APP_API_TTHT_READ_RECIPE}`;

    useEffect(() => {
        async function fectlist() {
            const requesURL = URL;
            const response = await fetch(requesURL);
            const reponseJSON = await response.json();
            console.log({ reponseJSON })

            const data = reponseJSON;
            setcard(data);
            // console.log(getname(data));

        }
        fectlist();
    }, []);

    const newData = props.setData;
    const result = cardname.map((item) => <Card key={item.id} handleDelete={newData} recipe={item} />)
    return result;
}
