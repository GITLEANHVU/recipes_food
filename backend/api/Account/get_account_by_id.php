<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/AccountModel.php');


// Get raw data | dot not need this field
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$account_id = $data['account_id'];

// Instantiate Account Object
$account_model = new AccountModel();

// Get values from Database
$valueReturn = $account_model->getAccountByID($account_id);

echo json_encode($valueReturn);