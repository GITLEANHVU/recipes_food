<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

// Instantiate Recipe Object
$recipe_model = new RecipeModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];

// Delete Recipe
if ($recipe_model->deleteRecipe($id)) {
  echo json_encode(
    array('message' => 'Recipe deleted')
  );
} else {
  echo json_encode(
    array('message' => 'Recipe can not deleted')
  );
}
