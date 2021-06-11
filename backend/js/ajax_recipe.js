const read_single_url = `http://localhost/recipes_food/backend/api/Recipe/read_single.php`;
const create_url = `http://localhost/recipes_food/backend/api/Recipe/create.php`;
const update_url = `http://localhost/recipes_food/backend/api/Recipe/update.php`;
const read_url = `http://localhost/recipes_food/backend/api/Recipe/read.php`;
const delete_url = `http://localhost/recipes_food/backend/api/Recipe/delete.php`;

const recipe_data = {
    name: 'Update',
    image: 'image',
    description: 'Update',
    steps: '123...',
    ingredients: '...',
    id : '16',
    category_id: '2',
    account_id: '2',
}
//
// fetchFunction(create_url, recipe_data);
// fetchFunction(update_url, recipe_data);
// fetchFunction(delete_url,{id: '1',category_id: '1',  account_id: '2'});
fetchFunction(read_single_url, {category_id: '3'});


