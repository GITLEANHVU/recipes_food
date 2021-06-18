<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CommentModel.php');
// Instantiate Account Object
$comment_model = new CommentModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$recipe_id = $data['recipe_id'];

// Get values from Database

$valueReturn = $comment_model->getCommentsByRecipeID($recipe_id);

if ($valueReturn == null) {
  echo json_encode(
    array('message' => 'Not value')
  );
} else {
  echo json_encode($valueReturn);
}
