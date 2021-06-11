<?php
 // Headers
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/AccountModel.php');

// Instantiate Account Object
$account_model = new AccountModel();

// Get raw data | dot not need this field
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$email = $data['email'];
$password = $data['password'];

// Get values from Database
$valueReturn = $account_model->getOneUser($email, $password);

echo json_encode($valueReturn);
