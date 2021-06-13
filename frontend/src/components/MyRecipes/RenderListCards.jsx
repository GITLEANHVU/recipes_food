import React from 'react'
import Card from './Card';

export default function RenderListCards (props){
    console.log(props)
    const initialData = props.initialData
    const newData = props.setInitialData;
    const result = initialData.map((value, index) => <Card key={index} handleDelete={props.setInitialData} recipe={value} />)
    return result;
}
