<?php
// Headers
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

$data = json_decode(file_get_contents("php://input"), true);


// Instantiate Account Object
$recipe_model = new RecipeModel();

// Get values from Database
$valueReturn = $recipe_model->getAllRecipes();

echo json_encode($valueReturn);