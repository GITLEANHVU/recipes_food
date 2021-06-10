<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CategoryModel.php');

// Instantiate Account Object
$category_model = new CategoryModel();

// Get values from Database
$valueReturn = $category_model->getCategories();


echo json_encode($valueReturn);