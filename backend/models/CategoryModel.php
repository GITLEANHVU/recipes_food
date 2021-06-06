<?php
class CategoryModel extends Database
{
    // Get categories
    public function getCategories()
    {
        $sql = parent::$connection->prepare("SELECT * FROM category");
        return parent::select($sql);
    }

    // Get category by ID
    public function getCategory($id)
    {
        $sql = parent::$connection->prepare("SELECT * FROM category WHERE id=?");
        $sql->bind_param('i', $id);

        if (count(parent::select($sql)) === 0) return null;
        return parent::select($sql)[0];
    }

    // Get length of categories table
    public function getTotalRowsCategoryTable()
    {
        $sql = parent::$connection->prepare("SELECT COUNT(id) FROM category");
        return parent::select($sql)[0]['COUNT(id)'];
    }

    //  Add one category
    public function createCategory($name, $description, $account_id)
    {
        $sql = parent::$connection->prepare("INSERT INTO `category` (`name`, `description`, `account_id`) VALUES (?, ?, ?);");
        $sql->bind_param('ssi', $name, $description, $account_id);
        return $sql->execute();
    }

    // Update one category
    public function updateCategory($name, $description, $account_id, $id)
    {
        $sql = parent::$connection->prepare("UPDATE `category` SET `name` = ?, `description` = ?, `account_id` = ?, `updated_at`=CURRENT_TIMESTAMP WHERE `category`.`id` = ?");
        $sql->bind_param('ssii', $name, $description, $account_id, $id);
        return $sql->execute();
    }

    // Delete one category
    public function deleteCategory($id)
    {
        $sql = parent::$connection->prepare("DELETE FROM `category` WHERE `category`.`id` = ?");
        $sql->bind_param('i', $id);
        return $sql->execute();
    }
}
