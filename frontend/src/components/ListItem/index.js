import React from 'react'
import Card from '../Card'
export default function ListItem(props) {
  return (
    <div className="row" data-masonry='{"percentPosition": true }'>
      {
        props.listItems.map((item, index) =>
          <Card
            imageLink={item.image}
            title={item.name}
            description={item.description}
            key={index}
            classes={{ mt: "mt-3" }}
          />)
      }
    </div>
  )
}