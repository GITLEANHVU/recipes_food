<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CategoryModel.php');

// Instantiate Category Object
$category_model = new CategoryModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];

// Delete Category
if ($category_model->deleteCategory($id)) {
  echo json_encode(
    array('message' => 'Category deleted')
  );
} else {
  echo json_encode(
    array('message' => 'Category not deleted')
  );
}
