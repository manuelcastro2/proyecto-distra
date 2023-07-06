-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2023 a las 01:00:05
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_distra_prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aceites`
--

CREATE TABLE `aceites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `marca` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modelo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `aceites`
--

INSERT INTO `aceites` (`id`, `marca`, `modelo`, `created_at`, `updated_at`) VALUES
(2, 'kia', 'picanto', '2023-06-29 07:58:32', '2023-06-29 07:58:32'),
(3, 'nissan', 'march', '2023-06-29 08:01:38', '2023-06-29 08:01:38'),
(4, 'renault', 'sandero', '2023-06-29 08:04:54', '2023-06-29 08:04:54'),
(5, 'hyundai', 'HB20 Hatchback', '2023-06-29 08:06:44', '2023-06-29 08:06:44'),
(6, 'mazda', 'mazda3', '2023-06-29 08:08:48', '2023-06-29 08:08:48'),
(7, 'suzuki', 'vitara 4x4', '2023-06-29 08:09:28', '2023-06-29 08:09:28'),
(8, 'audi', 'A3', '2023-06-29 08:11:08', '2023-06-29 08:11:08'),
(10, 'chevrolet', 'aveo', '2023-06-29 07:58:32', '2023-06-29 07:58:32'),
(11, 'chevrolet', 'spark gt', '2023-06-29 07:57:42', '2023-06-29 07:57:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aceites`
--
ALTER TABLE `aceites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `aceites_modelo_unique` (`modelo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aceites`
--
ALTER TABLE `aceites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
