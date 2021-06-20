<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CommentModel.php');

// Instantiate Account Object
$comment_model = new CommentModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$content = $data['content'];
$recipe_id = $data['recipe_id'];
$account_id = $data['account_id'];


// Insert Account
if ($comment_model->createComment($content, $account_id, $recipe_id)) {
  echo json_encode(
    array('message' => 'comment created')
  );
} else {
  echo json_encode(
    array('message' => 'comment not created')
  );
}
