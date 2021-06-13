-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 12, 2021 lúc 03:34 PM
-- Phiên bản máy phục vụ: 10.4.10-MariaDB-log
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project-fe2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `account_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `account_id` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `category`
--

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
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
