<?php
 // Headers
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 header('Access-Control-Allow-Methods: PUT');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');
 
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/AccountModel.php');

// Instantiate Account Object
$account_model = new AccountModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$address = $data['address'];
$role = $data['role'];
$status = $data['status'];

// Update Account

if ($account_model->updateAccount($name, $email, $password, $address, $role, $status, $id)) {
  echo json_encode(
    array('message' => 'Account updated')
  );
} else {
  echo json_encode(
    array('message' => 'Account not updated')
  );
}

