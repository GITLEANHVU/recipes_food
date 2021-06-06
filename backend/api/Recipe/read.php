<?php
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

// Instantiate Account Object
$recipe_model = new RecipeModel();

// Get values from Database
$valueReturn = $recipe_model->getAllRecipes();

echo json_encode($valueReturn);