<?php

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/AccountModel.php');

// Instantiate Account Object
$account_model = new AccountModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];

// Delete Account
if ($account_model->deleteAccount($id)) {
  echo json_encode(
    array('message' => 'Account deleted')
  );
} else {
  echo json_encode(
    array('message' => 'Account not deleted')
  );
}
