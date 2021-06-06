<?php

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/AccountModel.php');

// Instantiate Account Object
$account_model = new AccountModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$address = $data['address'];
$role = $data['role'];
$status = $data['status'];

// Insert Account

if ($account_model->createAccount($name, $email, $password, $address, $role, $status)) {
  echo json_encode(
    array('message' => 'Account created')
  );
} else {
  echo json_encode(
    array('message' => 'Account not created')
  );
}