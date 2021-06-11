import React from 'react'
import Card from './Card';

export default function RenderListCards (props){
    const initialData = props.initialData
    const result = initialData.map((value, index) => <Card key={index} recipe={value} />)
    return result;
}
