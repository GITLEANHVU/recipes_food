<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CommentModel.php');

// Instantiate Account Object
$comment_model = new CommentModel();

// Get values from Database
$valueReturn = $comment_model->getAllComment();

echo json_encode($valueReturn);