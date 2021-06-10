<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CommentModel.php');

// Instantiate Comment Object
$comment_model = new CommentModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// Set values
$id = $data['id'];
$recipe_id = $data['recipe_id'];
$account_id = $data['account_id'];

// Delete Comment

if ($comment_model->deleteComment($id, $recipe_id, $account_id)) {
  echo json_encode(
    array('message' => 'Comment deleted')
  );
} else {
  echo json_encode(
    array('message' => 'Comment not created')
  );
}
