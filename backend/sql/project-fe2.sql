-- Created by LAV
-- Date Created 19/05/20	21
-- DB recipes food

-- set up: Create database name is `project-fe2`

CREATE TABLE accounts (
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


CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  description text,
  account_id INT NOT NULL,
  created_at DATETIME DEFAULT current_timestamp(),
	updated_at DATETIME DEFAULT now()
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE recipes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name  varchar(255),
  image varchar(255) default '#',
  description text,
  steps TEXT comment 'buoc thuc hien | lưu lại mảng các json => "[{"stepID": 0, "stepDes": "nuong thit"}]"',
  ingredients TEXT comment 'thanh phan | Lưu lại mảng các json [{"ingrID":0, "ingrName: "ot", "ingrQuatity: 2", "ingrWeight: 1kg"}]',
  
  created_at DATETIME DEFAULT current_timestamp(), -- 23-2-2021-2-1.split()
	updated_at DATETIME DEFAULT now(),

  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id),
  account_id INT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  content text,
  created_at DATETIME DEFAULT current_timestamp(),
	updated_at DATETIME DEFAULT now(),

  account_id INT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id),

  recipe_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipe(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


> đã đăng nhập
trang : home
	header [navbar "Button HomeLink, Button MyRecipesLink, Button AddNewRecipeLink, Button LogoutLink"]
	main[
	
	(Tạo một cái Card chưa thông tin sau: ảnh, tên, nút show detail),
	(hiển thị nút sửa, và nút xóa nếu Card của người đăng nhập vào),
	(phân trang)
	] note: này là hiện toàn bộ recipes luôn
	footer [Thông tin nhóm, tên nhóm ..... làm sau cũng được]
trang : my recipes
	header (nhu tren)
	main [
	(Tạo một cái Card chưa thông tin sau: ảnh, tên, nút show detail),
	(hiển thị nút sửa, và nút xóa),
	(phân trang)
	] note: này là hiện chỉ mỗi recipe nào mà người đăng nhập tạo.
	footer (nhu tren)
trang : add new recipe
	header
	main [
		(form chưa thông tin để nhập liệu sao cho phù hợp với thông tin của Database)
	]
	footer (nhu tren)
trang : show Detail
	header [Chỉ có phần nút ấn quay lại, hoặc thêm như trên cũng được.]
	main [
		(Hiện thông tin chi tiết ra, tùy ý người thiết kế.
		có đủ thông tin của một recipe là được)
		(trong trường hợp người tạo bài recipe food này, thì hiển thị nút chỉnh sửa, và nút xóa.)
	]
	footer (nhu tren)

> chưa đăng nhập

trang : home
	header [navbar "Button HomeLink, Button LogoutLink"] note: dựa theo điều kiện là chưa đăng nhập thì hiện chỉ 2 cái thôi
	main[
	
	(Tạo một cái Card chưa thông tin sau: ảnh, tên, nút show detail),
	(phân trang)
	] note: này là hiện toàn bộ recipes luôn
	footer [Thông tin nhóm, tên nhóm ..... làm sau cũng được]

trang : show Detail
	header [Chỉ có phần nút ấn quay lại, hoặc thêm như trên cũng được.]
	main [
		(Hiện thông tin chi tiết ra, tùy ý người thiết kế.
		có đủ thông tin của một recipe là được)
	]
	footer (nhu tren)

tổng kết: mình có trang home, showDetail, addNewRecipe, Myrecipes
login vũ làm :) 







