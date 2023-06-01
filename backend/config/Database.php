<?php
class Database
{

  /**
   * @ Properties config
   * @ Private properties
   */
  private $DB_HOST = 'mysql_db';
  private $DB_USER = 'root';
  private $DB_PASS = 'root';
  private $DB_NAME = 'recipes_food';
  // private $DB_PORT  = '8080';

    /**
   * @ Property connection
   * @ Public property 
   */
  public static $connection = NULL;


  /**
   * @ Constructor
   * @ Return Database Connection
   */
  public function __construct()
  {
    if (!self::$connection) {
      // self::$connection = new mysqli($this->DB_HOST, $this->DB_USER, $this->DB_PASS, $this->DB_NAME, $this->DB_PORT);
      self::$connection = new mysqli($this->DB_HOST, $this->DB_USER, $this->DB_PASS, $this->DB_NAME);
      // self::$connection->set_charset('utf8mb4');
    }
    return self::$connection;
  }


  /**
   * @ Execute Query function
   * @ Return an Array
   */
  public function select($sql)
  {
    $items = [];
    $sql->execute();
    $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
    return $items;
  }

}
