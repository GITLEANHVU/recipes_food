import React, { useContext, useEffect, useState } from 'react'
import ListItem from '../../components/ListItem'
import axios from 'axios';
import { API_LINK_RECIPE_READ_BY_ACCOUNT } from '../../api_link';
import { HeaderContext } from '../../HeaderProvider';

export default function MyRecipePage() {
  const { auth } = useContext(HeaderContext);
  const [listItems, setListItems] = useState([]);
  async function getListItems() {
    await axios.post(`${API_LINK_RECIPE_READ_BY_ACCOUNT}`, JSON.stringify({ account_id: auth?.id })).then((res) => {
      setListItems(res.data);
    }).catch((err) => {
      setListItems([]);
    });
  }

  useEffect(() => {
    getListItems();
  }, [auth]);

  return (
    <div id="recipe-page">
      <div className="container">
        <ListItem
          listItems={listItems} />
      </div>
    </div>
  )
}
