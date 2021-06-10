const read_single_url = `http://localhost/recipes_food/backend/api/Comment/read_single.php`;
const create_url = `http://localhost/recipes_food/backend/api/Comment/create.php`;
const update_url = `http://localhost/recipes_food/backend/api/Comment/update.php`;
const delete_url = `http://localhost/recipes_food/backend/api/Comment/delete.php`;

const comment_data = {
 id:'1',
 content='mon an nay kha ngon',
 created_at='mon hue',
 updated_at='mon hue',
 account_id='1',
 recipe_id='1'
}

fetchFunction(create_url, comment_data);
fetchFunction(update_url, comment_data);
fetchFunction(read_single_url, {id: '1'});
fetchFunction(delete_url, {id: '1'});