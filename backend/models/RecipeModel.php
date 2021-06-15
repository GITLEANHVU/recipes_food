<?php
class RecipeModel extends Database
{
    // Get all recipes to show at home screen
    public function getAllRecipes()
    {
        $sql = parent::$connection->prepare("SELECT * FROM `recipe`");
        // $sql->bind_param('i', $account_id);
        return parent::select($sql);
    }
    // Get all recipes by category_id to search recipes at home screen
    public function getRecipesByCategoryID($category_id)
    {
        $sql = parent::$connection->prepare("SELECT * FROM `recipe` WHERE category_id = ?");
        $sql->bind_param('i', $category_id);
        return parent::select($sql);
    }

    // Get all recipes by account_id to show at <My Recipes> screen
    public function getAllRecipesByAccountID($account_id)
    {
        $sql = parent::$connection->prepare("SELECT * FROM `recipe` 
        WHERE account_id=?");

        $sql->bind_param('i', $account_id);
        return parent::select($sql);
    }
    // Get all recipes by account_id and category_id to search recipes at <My Recipes> screen
    public function getAllRecipesBy_AccountIDCategoryID($account_id, $category_id)
    {
        $sql = parent::$connection->prepare("SELECT * FROM `recipe` 
        WHERE account_id=? AND category_id=?");

        $sql->bind_param('ii', $account_id, $category_id);
        return parent::select($sql);
    }

    // Get length of recipe table
    public function getTotalRowsRecipeTable()
    {
        $sql = parent::$connection->prepare("SELECT COUNT(id) FROM recipe");

        return parent::select($sql)[0]['COUNT(id)'];
    }

    //  Add one recipe
    public function createRecipe($name, $image, $description, $steps, $ingredients, $category_id, $account_id)
    {

        $sql = parent::$connection->prepare("INSERT INTO
        `recipe` (`name`, `image`, `description`, `steps`, `ingredients`, `category_id`, `account_id`) 
        VALUES (?,?,?,?,?,?,?)");

        $sql->bind_param("sssssii", $name, $image, $description, $steps, $ingredients, $category_id, $account_id);
        return $sql->execute();
    }

    // Update recipe
    public function updateRecipe($name, $image, $description, $steps, $ingredients, $id, $category_id, $account_id)
    {
        $sql = parent::$connection->prepare("UPDATE `recipe` 
        SET `name` = ?, `image` = ?, `description` = ?, `steps` = ?, `ingredients` = ?, `updated_at` = CURRENT_TIMESTAMP 
        WHERE `recipe`.`id` = ? AND `recipe`.`category_id`=? AND `recipe`.`account_id`=?");

        $sql->bind_param("sssssiii", $name, $image, $description, $steps, $ingredients, $id, $category_id, $account_id);
        return $sql->execute();
    }

    // Delete recipe
    public function deleteRecipe($id, $category_id, $account_id)
    {
        $sql = parent::$connection->prepare("DELETE FROM `recipe` 
        WHERE `recipe`.`id` = ? AND `recipe`.`category_id`=? AND `recipe`.`account_id`=?");

        $sql->bind_param('iii', $id, $category_id, $account_id);
        return $sql->execute();
    }
}
