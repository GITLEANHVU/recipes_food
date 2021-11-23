import React from 'react'

export default function IngredientItem(props) {
  const index = props?.index;
  const ing = props?.ing;
  return (
    <li className="list-group-item">{index + 1}. {ing}</li>
  )
}
