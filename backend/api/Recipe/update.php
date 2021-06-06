<?php
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

// Instantiate Category Object
$recipe_model = new RecipeModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$name = $data['name'];
$image = $data['image'];
$description = $data['description'];
$steps = $data['steps'];
$ingredients = $data['ingredients'];
$id = $data['id'];
$category_id = $data['category_id'];
$account_id = $data['account_id'];

// Delete Recipe
if ($recipe_model->updateRecipe($name, $image, $description, $steps, $ingredients, $id, $category_id, $account_id)) {
  echo json_encode(
    array('message' => 'Recipe updated')
  );
} else {
  echo json_encode(
    array('message' => 'Recipe not updated')
  );
}
