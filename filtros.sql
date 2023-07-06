-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-07-2023 a las 17:38:58
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
-- Estructura de tabla para la tabla `filtros`
--

CREATE TABLE `filtros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `filtro` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modelo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `filtros`
--

INSERT INTO `filtros` (`id`, `filtro`, `marca`, `modelo`, `created_at`, `updated_at`) VALUES
(1, 'filtro de aire', 'chevrolet', 'spark gt', '2023-06-29 02:57:42', '2023-06-29 02:57:42'),
(2, 'filtro de aire', 'kia', 'picanto', '2023-06-29 02:58:32', '2023-06-29 02:58:32'),
(3, 'filtro de aceite', 'nissan', 'march', '2023-06-29 03:01:38', '2023-06-29 03:01:38'),
(4, 'filtro de aceite', 'renault', 'sandero', '2023-06-29 03:04:54', '2023-06-29 03:04:54'),
(5, 'filtro de combustible', 'hyundai', 'HB20 Hatchback', '2023-06-29 03:06:44', '2023-06-29 03:06:44'),
(6, 'filtro de combustible', 'mazda', 'mazda3', '2023-06-29 03:08:48', '2023-06-29 03:08:48'),
(7, 'filtro de cabina', 'suzuki', 'vitara 4x4', '2023-06-29 03:09:28', '2023-06-29 03:09:28'),
(8, 'filtro de cabina', 'audi', 'A3', '2023-06-29 03:11:08', '2023-06-29 03:11:08'),
(10, 'filtro de aire', 'chevrolet', 'aveo', '2023-06-29 02:58:32', '2023-06-29 02:58:32');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `filtros`
--
ALTER TABLE `filtros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `modelo` (`modelo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `filtros`
--
ALTER TABLE `filtros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
