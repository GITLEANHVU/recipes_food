<?php
class AccountModel extends Database
{
    // Get account by email and password
    public function getOneUser($email, $password)
    {
        $sql = parent::$connection->prepare("SELECT * FROM account WHERE email = ? AND password = ?");
        $sql->bind_param('ss', $email, $password);
        return parent::select($sql);
    }

 // Get account by id
 public function getAccountByID($id)
 {
     $sql = parent::$connection->prepare("SELECT * FROM account WHERE `id` = ?");
     $sql->bind_param('i', $id);
     return parent::select($sql);
 }

    // Get all account
    public function getAllAccount()
    {
        $sql = parent::$connection->prepare("SELECT * FROM account");
        return parent::select($sql);
    }

    // Get length of account table
    public function getTotalRowsUserTable()
    {
        $sql = parent::$connection->prepare("SELECT COUNT(id) FROM account");
        return parent::select($sql)[0]['COUNT(id)'];
    }

    
    // Add one account
    public function createAccount($name, $email, $password, $address, $role, $status)
    {
        $sql = parent::$connection->prepare("INSERT INTO `account` (`name`, `email`, `password`, `address`, `role`, `status`) VALUES (?, ?, ?, ?, ?, ?)");
        $sql->bind_param('sssssi', $name, $email, $password, $address, $role, $status);
        return $sql->execute();
    }
    

    // update one account
    public function updateAccount($name, $email, $password, $address, $role, $status, $id)
    {
        $sql = parent::$connection->prepare("UPDATE `account` SET `name` = ?, `email` = ?, `password` = ?, `address` = ?, `role` = ? , `status` = ?, `updated_at`=CURRENT_TIMESTAMP WHERE `account`.`id` = ?");
        $sql->bind_param('sssssii', $name, $email, $password, $address, $role, $status, $id);
        return $sql->execute();
    }


    // delete one account
    public function deleteAccount($id)
    {
        $sql = parent::$connection->prepare("DELETE FROM `account` WHERE `account`.`id` = ?");
        $sql->bind_param('i', $id);
        return $sql->execute();
    }

    
}
    