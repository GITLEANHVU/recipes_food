import React, { useEffect, useState } from 'react'
import ListItem from '../../components/ListItem'
import axios from 'axios';
import { API_LINK_RECIPE_READ_ALL } from '../../api_link';

export default function RecipePage() {
  const [listItems, setListItems] = useState([]);
  async function getListItems() {
    await axios.get(API_LINK_RECIPE_READ_ALL).then((res) => {
      setListItems(res.data);
    });
  }
  useEffect(() => {
    getListItems();
  }, []);

  return (
    <div id="recipe">
      <div className="container">
        <ListItem
          listItems={listItems} />
      </div>
    </div>
  )
}
