<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CategoryModel.php');

// Instantiate Account Object
$category_model = new CategoryModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$name = $data['name'];
$description = $data['description'];
$account_id = $data['account_id'];

// Insert Account
if ($category_model->createCategory($name, $description, $account_id)) {
  echo json_encode(
    array('message' => 'Category created')
  );
} else {
  echo json_encode(
    array('message' => 'Category not created')
  );
}


