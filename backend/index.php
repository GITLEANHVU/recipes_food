<!-- <h1 style="text-align: center;">Test Models</h1> -->

<?php
include_once('./config/Database.php');
include_once('./models/AccountModel.php');
include_once('./models/CategoryModel.php');
include_once('./models/CommentModel.php');

$account_model = new AccountModel();
// $account_model->createAccount("leanhvu", 'lav@gmail.com', '12345678', 'tdc.edu.vn', 'user', '1');

// $account_model->updateAccount("le anh vu", 'lav@gmail.com', '12345678', 'thu-duc-college.tdc.edu.vn', 'user', '1', '1');

// $account_model->deleteAccount('1');

// $oneUser = $account_model->getOneUser('lav@gmail.com', '12345678');
// echo(json_encode($oneUser));

// $totalRowsUserTable = $account_model->getTotalRowsUser();
// echo(json_encode($totalRowsUserTable));

$category_model = new CategoryModel();
// $category_model->createCategory("Món Chiên", "Món ăn chứa nhiều dầu mỡ", "1");

// $category_model->updateCategory("Món Chiên", "Món ăn chứa nhiều dầu mỡ có thể gây béo phì, mỡ trong máu, ...", "1", "1");

// $categoryByID = $category_model->deleteCategory('1');

// $categoryByID = $category_model->getCategory('1');
// echo(json_encode($categoryByID));

// $totalRowsCategoryTable = $category_model->getTotalRowsCategoryTable();
// echo(json_encode($totalRowsCategoryTable));

// $recipe_model = new RecipeModel();
// $recipe_model->createRecipe("Gà kho xả ớt","img","Món ăn ngon","Các bước thực hiện","Thịt gà",1,2);
// $recipe_model->updateRecipe("Update món","img","Món ăn ngon","Các bước thực hiện","Thịt gà",1,1,2);
#
# @ Công việc.
#

# Test recipe model - test tương tự các model trên - 

# Test comment model - test tương tự các model trên - 

$comment_model = new CommentModel();

// $comment_model->createComment("Món được", "1", "1");

// $comment_model->updateComment("Món ngon", "1", "1", "1");

// $comment_model->deleteComment("1", "1", "1");

// $totalRowsCommentTable = $comment_model->getTotalRowsCommentTable();
// echo(json_encode($totalRowsCommentTable));


?>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test api</title>
</head>

<body>
  <h1>Fetch</h1>

  <!-- do not comment this line script -->
  <script src="./js/ajax_functions.js"></script>
  <!-- test functions from ajax_functions.js -->
  <script>console.log(fetchFunction)</script>


  <!-- <script src="./js/ajax_account.js"></script> -->
  <!-- <script src="./js/ajax_category.js"></script> -->
  <script src="./js/ajax_comment.js"></script>



</body>

</html>