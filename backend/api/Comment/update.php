<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CommentModel.php');

// Instantiate Category Object
$comment_model = new CommentModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$id = $data['id'];
$content = $data['content'];
$recipe_id = $data['recipe_id'];
$account_id = $data['account_id'];

// Update Comment

if ($comment_model->updateComment($content, $id, $recipe_id, $account_id)) {
  echo json_encode(
    array('message' => 'Comment updated')
  );
} else {
  echo json_encode(
    array('message' => 'Comment not updated')
  );
}
