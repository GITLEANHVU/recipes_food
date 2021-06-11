<?php
 // Headers
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CategoryModel.php');

// Instantiate Account Object
$category_model = new CategoryModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$id = $data['id'];

// Get values from Database
$valueReturn = $category_model->getCategory($id);

if ($valueReturn != null) {
  echo json_encode($valueReturn);
} else {
  echo json_encode(
    array('message' => 'Not value')
  );
}
