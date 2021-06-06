<?php
class CommentModel extends Database
{
    // Lấy tát cả sản phẩm
    public function getAllComment()
    {
        $sql = parent::$connection->prepare("SELECT * FROM comment");
        return parent::select($sql);
    }

    // Get all comments by recipe id.
    public function getCommentsByRecipeID($recipe_id)
    {
        $sql = parent::$connection->prepare("SELECT comment.* FROM comment INNER JOIN recipe ON comment.recipe_id = recipe.id WHERE recipe_id=?");
        $sql->bind_param('i', $recipe_id);
        return parent::select($sql);
    }

    // Get length of comment table
    public function getTotalRowsCommentTable()
    {
        $sql = parent::$connection->prepare("SELECT COUNT(id) FROM comment");
        return parent::select($sql)[0]['COUNT(id)'];
    }

    //  Add one comment
    public function createComment($content, $account_id, $recipe_id)
    {
        $sql = parent::$connection->prepare("INSERT INTO `comment` (`content`, `account_id`, `recipe_id`) VALUES (?, ?, ?)");
        $sql->bind_param('sii', $content, $account_id, $recipe_id);
        return $sql->execute();
    }
    
    // Update comment
    public function updateComment($content, $id, $recipe_id, $account_id)
    {
        $sql = parent::$connection->prepare("UPDATE `comment` SET `content` = ?, `updated_at` = CURRENT_TIMESTAMP WHERE `comment`.`id` = ? AND `comment`.`recipe_id`=? AND `comment`.`account_id`=?");
        $sql->bind_param('siii', $content, $id, $recipe_id, $account_id);
        return $sql->execute();
    }

    // Delete comment
    public function deleteComment($id, $recipe_id, $account_id)
    {
        $sql = parent::$connection->prepare("DELETE FROM `comment` WHERE `comment`.`id` = ? AND `comment`.`recipe_id`=? AND `comment`.`account_id`=?");
        $sql->bind_param('iii', $id, $recipe_id, $account_id);
        return $sql->execute();
    }

    // Like if needed| chua chinh sua
    // public function updateView($id)
    // {
    //     $sql = parent::$connection->prepare("UPDATE `products` SET `product_view` = `product_view` + 1 WHERE `products`.`id` = ?;");
    //     $sql->bind_param('i', $id);
    //     return $sql->execute();
    // }
}
    