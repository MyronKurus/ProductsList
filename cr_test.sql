-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Окт 16 2016 г., 22:07
-- Версия сервера: 5.7.11
-- Версия PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cr_test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `price` float NOT NULL,
  `descr` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `descr`) VALUES
(28, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(26, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(27, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(25, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(24, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(23, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(14, 'product name', 100.5, 'Description bla bla bla bla bla'),
(15, 'Another prod', 123.456, 'Ooololol 123'),
(16, 'test prod', 123, 'des'),
(19, 'product name', 100.5, 'Description bla bla bla bla bla'),
(20, 'Another prod', 123.456, 'Ooololol 123'),
(21, 'test prod', 123, 'des'),
(22, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(10, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(11, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(12, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(13, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(29, 'product name', 100.5, 'Description bla bla bla bla bla'),
(30, 'Another prod', 123.456, 'Ooololol 123'),
(31, 'test prod', 123, 'des'),
(32, 'product name', 100.5, 'Description bla bla bla bla bla'),
(33, 'Another prod', 123.456, 'Ooololol 123'),
(34, 'test prod', 123, 'des'),
(35, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(36, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(37, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(38, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(39, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(40, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(41, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(42, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(43, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(44, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(45, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(46, 'product name', 100.5, 'Description bla bla bla bla bla'),
(47, 'Another prod', 123.456, 'Ooololol 123'),
(48, 'test prod', 123, 'des'),
(49, 'product name', 100.5, 'Description bla bla bla bla bla'),
(50, 'Another prod', 123.456, 'Ooololol 123'),
(51, 'test prod', 123, 'des'),
(52, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(53, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(54, 'Z prodctasd', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(55, 'Test prduct 12azxzc', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(56, 'Z prodctzxcc124', 20.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(57, 'product name', 100.5, 'Description bla bla bla bla bla'),
(58, 'Another prod', 123.456, 'Ooololol 123'),
(59, 'test prod', 123, 'des'),
(60, 'product name', 100.5, 'Description bla bla bla bla bla'),
(61, 'Another prod', 123.456, 'Ooololol 123'),
(62, 'test prod', 123, 'des'),
(63, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.'),
(64, 'Test prdasddcuct 12', 10000.5, 'Nam ullamcorper, purus ac sollicitudin laoreet, mi justo maximus eros, eu aliquet turpis mauris ac neque. Ut ac aliquam sem. Quisque mi leo, cursus vitae viverra id, pretium non ex. Vestibulum in fermentum ligula. Donec non augue risus. Praesent vitae lorem nunc. Pellentesque metus mauris, interdum consectetur erat eu, mollis mollis eros. Morbi dictum est ut justo vehicula aliquet. Curabitur justo dolor, commodo nec justo in, convallis hendrerit lectus.');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `firstname` tinytext,
  `lastname` tinytext,
  `registered` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstname`, `lastname`, `registered`) VALUES
(1, 'test@test.te', '5f4dcc3b5aa765d61d8327deb882cf99', 'Innokentii', 'Yastrebov', '2016-10-16 20:46:37'),
(2, 'test3@test.te', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, NULL, '2016-10-17 00:19:30'),
(3, 'test4@test.te', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, NULL, '2016-10-17 00:26:41');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
