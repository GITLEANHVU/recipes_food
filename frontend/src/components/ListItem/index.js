import React from 'react'
import Card from '../Card'
export default function ListItem(props) {
  let listItems = [];
  if (Array.isArray(props.listItems)) {
    listItems = props?.listItems;
  }
  return (
    <div className="row" data-masonry='{"percentPosition": true }'>
      {
        listItems.length > 0 ?
          listItems.map((item, index) =>
            <Card
              id={item?.id}
              imageLink={item?.image}
              title={item?.name}
              description={item?.description}
              key={index}
              classes={{ mt: "mt-3" }}
            />) : ""
      }
    </div>
  )
}