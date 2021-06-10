-- Created by LAV
-- Date Created 19/05/20	21
-- DB recipes food

-- set up: Create database name is `recipes_food`

CREATE TABLE account (
  id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) not null,
	email VARCHAR(100) not null UNIQUE,
	password VARCHAR(100) not null,
	address VARCHAR(100) null,
	role varchar(50) default 'user' comment 'user or admin',
	status INT(1) DEFAULT '1' comment '1 kha dung, 0 bi khoa',
	created_at DATETIME DEFAULT current_timestamp(),
	updated_at DATETIME DEFAULT now()
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  description text,
  account_id INT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id),
  created_at DATETIME DEFAULT current_timestamp(),
	updated_at DATETIME DEFAULT now()
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE recipe (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name  varchar(255),
  image varchar(255) default '#',
  description text,
  steps TEXT comment 'buoc thuc hien | lưu lại mảng các json => "[{"stepID": 0, "stepDes": "nuong thit"}]"',
  ingredients TEXT comment 'thanh phan | Lưu lại mảng các json [{"ingrID":0, "ingrName: "ot", "ingrQuatity: 2", "ingrWeight: 1kg"}]',
  
  created_at DATETIME DEFAULT current_timestamp(), 
	updated_at DATETIME DEFAULT now(),

  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id),
  account_id INT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content text,
  created_at DATETIME DEFAULT current_timestamp(),
	updated_at DATETIME DEFAULT now(),

  account_id INT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id),

  recipe_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipe(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;
