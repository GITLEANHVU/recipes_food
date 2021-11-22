<?php
// Headers
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

$input = json_decode(file_get_contents("php://input"), true);

$page = $input['page'];
$perPage = $input['perPage'];

$productModel = new RecipeModel();

$items = $productModel->getRecipesByPage($perPage, $page);

echo json_encode($items);