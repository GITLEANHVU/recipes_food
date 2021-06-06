<?php
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

// Instantiate Recipe Object
$recipe_model = new RecipeModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];
$category_id = $data['category_id'];
$account_id = $data['account_id'];

// Delete Recipe
if ($recipe_model->deleteRecipe($id, $category_id, $account_id)) {
  echo json_encode(
    array('message' => 'Recipe deleted')
  );
} else {
  echo json_encode(
    array('message' => 'Recipe can not deleted')
  );
}
