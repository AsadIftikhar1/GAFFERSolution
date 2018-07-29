-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2018 at 09:56 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gaffercart`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `slug`, `createdAt`, `updatedAt`) VALUES
(17, 'Connor', 'connor', '2018-07-22 19:20:21', '2018-07-22 19:20:21'),
(18, 'ArmyShoe', 'armyshoe', '2018-07-22 19:20:48', '2018-07-22 19:20:48'),
(19, 'FiftthAvenue', 'fiftthavenue', '2018-07-22 19:21:09', '2018-07-22 19:21:09'),
(20, 'Caterpillarcap', 'caterpillarcap', '2018-07-22 19:21:28', '2018-07-22 19:21:28');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text,
  `sorting` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `slug`, `content`, `sorting`, `createdAt`, `updatedAt`) VALUES
(7, 'Home ', 'home', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 0, '2018-07-07 22:06:37', '2018-07-07 22:06:37'),
(8, 'About Us', 'about-us', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 0, '2018-07-07 22:07:54', '2018-07-07 22:07:54'),
(9, 'Contact Us', 'cotact-us', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 0, '2018-07-07 22:08:07', '2018-07-07 22:08:07'),
(10, 'Services ', 'services-', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', 0, '2018-07-07 22:08:19', '2018-07-07 22:08:19'),
(11, 'Brand Manager', 'brand-manager', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has suLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', 0, '2018-07-07 22:08:42', '2018-07-07 22:08:42');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `desc`, `category`, `price`, `images`, `createdAt`, `updatedAt`) VALUES
(56, 'ArmyShoe', 'armyshoe', 'ArmyShoe Description', 'armyshoe', 60000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:24:41', '2018-07-22 19:24:41'),
(57, 'ArmyShoe 2', 'armyshoe-2', 'ArmyShoe 2 Description', 'armyshoe', 60000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:26:10', '2018-07-22 19:26:10'),
(60, 'ArmyShoe 5', 'armyshoe-5', 'ArmyShoe 5 Description', 'armyshoe', 6000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:27:22', '2018-07-22 19:27:22'),
(61, 'ArmyShoe 6', 'armyshoe-6', 'ArmyShoe 6 Description', 'armyshoe', 6000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:27:32', '2018-07-22 19:27:32'),
(62, 'ArmyShoe 7', 'armyshoe-7', 'ArmyShoe 7 Description', 'armyshoe', 6000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:27:42', '2018-07-22 19:27:42'),
(63, 'ArmyShoe 8', 'armyshoe-8', 'ArmyShoe 8 Description', 'armyshoe', 6000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:28:01', '2018-07-22 19:28:01'),
(64, 'ArmyShoe 9', 'armyshoe-9', 'ArmyShoe 9 Description', 'armyshoe', 6000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 19:28:21', '2018-07-22 19:28:21'),
(66, 'Connor Shirt', 'connor-shirt', 'ConnorShirt Description', 'connor', 7000, '20842006_493580521005783_1238106246289369406_n.jpg', '2018-07-22 20:21:39', '2018-07-22 20:21:39'),
(67, 'Connor Shirt', 'connor-shirt', 'ConnorShirt Description', 'connor', 7000, '20842006_493580521005783_1238106246289369406_n.jpg', '2018-07-22 20:21:42', '2018-07-22 20:21:42'),
(68, 'Connor Shirt2', 'connor-shirt2', 'ConnorShirt Description', 'connor', 7000, '20842006_493580521005783_1238106246289369406_n.jpg', '2018-07-22 20:21:53', '2018-07-22 20:21:53'),
(69, 'Connor Shirt3', 'connor-shirt3', 'ConnorShirt3 Description', 'connor', 7000, '20842006_493580521005783_1238106246289369406_n.jpg', '2018-07-22 20:22:12', '2018-07-22 20:22:12'),
(70, 'Connor Shirt4', 'connor-shirt4', 'ConnorShirt4 Description', 'connor', 7000, '20842006_493580521005783_1238106246289369406_n.jpg', '2018-07-22 20:22:24', '2018-07-22 20:22:24'),
(71, 'Fifth Avenue', 'fifth-avenue', 'Fifth Avenue Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:24:52', '2018-07-22 20:24:52'),
(72, 'Fifth Avenue 1', 'fifth-avenue-1', 'Fifth Avenue 1 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:25:04', '2018-07-22 20:25:04'),
(73, 'Fifth Avenue 2', 'fifth-avenue-2', 'Fifth Avenue 2 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:25:15', '2018-07-22 20:25:15'),
(74, 'Fifth Avenue 3', 'fifth-avenue-3', 'Fifth Avenue 3 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:25:24', '2018-07-22 20:25:24'),
(75, 'Fifth Avenue 4', 'fifth-avenue-4', 'Fifth Avenue 4 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:25:37', '2018-07-22 20:25:37'),
(76, 'Fifth Avenue 5', 'fifth-avenue-5', 'Fifth Avenue 5 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:25:47', '2018-07-22 20:25:47'),
(77, 'Fifth Avenue 6', 'fifth-avenue-6', 'Fifth Avenue 6 Description', 'fiftthavenue', 3000, '37398783_435986253544873_2541919447166222336_n.jpg', '2018-07-22 20:26:01', '2018-07-22 20:26:01'),
(78, 'Cap1', 'cap1', 'Cap1 Description', 'caterpillarcap', 3000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 20:28:11', '2018-07-22 20:28:11'),
(79, 'Cap2', 'cap2', 'Cap2 Description', 'caterpillarcap', 3000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 20:28:22', '2018-07-22 20:28:22'),
(80, 'Cap3', 'cap3', 'Cap3 Description', 'caterpillarcap', 3000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 20:28:32', '2018-07-22 20:28:32'),
(81, 'Cap4', 'cap4', 'Cap4 Description', 'caterpillarcap', 3000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 20:28:47', '2018-07-22 20:28:47'),
(82, 'Cap5', 'cap5', 'Cap5 Description', 'caterpillarcap', 3000, '32724787_632461330451034_2337351499182505984_n.jpg', '2018-07-22 20:28:58', '2018-07-22 20:28:58');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20180420232930-create-page.js'),
('20180426210150-create-category.js'),
('20180427201249-create-product.js'),
('20180617112902-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `admin`, `createdAt`, `updatedAt`) VALUES
(42, 'Gaffer', 'asadiftikhar539@gmail.com', 'Gaffer@snousher', '$2a$10$8eDcTHp8xW65jrufv7YaGenkQ1yYFwglLa0/INs6Tab58B78xf4Iu', 0, '2018-07-07 15:28:23', '2018-07-07 15:28:23'),
(43, 'Mussarat', 'asadiftikhar539@gmail.com', 'Mussarat_Iftikhar', '$2a$10$uR2Hf0J6aTDvW0OUMhpRY.aCdkVOVZU24kWBni.Yuw1ZyQNDhD1lG', 0, '2018-07-07 15:33:43', '2018-07-07 15:33:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
