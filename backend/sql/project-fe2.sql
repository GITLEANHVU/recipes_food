-- Created by LAV
-- Date Created 19/05/2021
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



-- INSERT VALUES

-- TABLE CATEGORY
INSERT INTO `category` (`id`, `name`, `description`, `account_id`, `created_at`, `updated_at`) VALUES
(1, 'Món kho', 'Món kho thường được làm bằng cách kho lên.', 5, '2021-05-22 22:45:54', '2021-05-22 22:45:54'),
(2, 'Món luột', 'Món luột thường được làm bằng cách luột lên.', 5, '2021-05-22 22:46:32', '2021-05-22 22:46:32'),
(3, 'Món nướng', 'Món nướng thường được làm bằng cách nướng lên.', 5, '2021-05-22 22:46:49', '2021-05-22 22:46:49'),
(4, 'Món Chiên', 'Chiên giòn tất cả mọi thứ', 5, '2021-06-12 20:34:24', '2021-06-12 20:34:24'),
(5, 'Món Canh', 'Moi thứ trên đời đều được nấu thành canh', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(6, 'Món chay', 'Nên thanh tịnh trong mọi trường hợp', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(7, 'Bánh', 'Bánh rất ngon', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(8, 'Chè', 'Chè rất ngọt', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(9, 'Pizza', 'Rất chi là béo', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(10, 'Wague', 'Bò wague rất ngon', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(11, 'Trà sữa', 'Trà sửa rất ngon nhưng rất béo', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(12, 'Thức ăn nhanh', 'Rất mắc nhưng không ngon', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(13, 'Trà Đào', 'Những miếng đào giòn sừng sực', 5, '2021-06-12 20:48:22', '2021-06-12 20:48:22'),
(14, 'Món Trộn', 'Cực kì heo thỳ', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(15, 'Món hầm', 'Hầm rất mềm', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(16, 'Tráng miệng', 'Rất đa dạng', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(17, 'Bánh mì', 'Tuyệt vời', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(18, 'Lẩu', 'Rất hút người ăn', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(19, 'Trứng cá tầm muối', 'Không có tiền ăn', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(20, 'Ốp lết', 'Món nào làm cũng ngon', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04'),
(21, 'Tốp mỡ', 'Béo mà giòn', 5, '2021-06-12 20:58:04', '2021-06-12 20:58:04');

-- 


-- 


-- 
