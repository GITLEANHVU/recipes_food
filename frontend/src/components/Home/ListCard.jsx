import React from 'react';
import Card from './Card';

export default function ListCard (props){
    const data = props.data;
    const newData = props.setData;
    const result = data.map((item, index) => <Card key={index} handleDelete={newData} recipe = {item}/>)
    return result;
}
