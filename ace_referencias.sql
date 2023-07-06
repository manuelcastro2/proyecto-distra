-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2023 a las 01:00:21
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
-- Estructura de tabla para la tabla `ace_referencias`
--

CREATE TABLE `ace_referencias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `referencia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_aceites` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ace_referencias`
--

INSERT INTO `ace_referencias` (`id`, `referencia`, `id_aceites`, `created_at`, `updated_at`) VALUES
(1, 'Aceite 15w50 4t Sintetico Liqui Moly', 2, '2023-06-29 03:08:48', '2023-06-29 03:08:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ace_referencias_id_aceites_foreign` (`id_aceites`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  ADD CONSTRAINT `ace_referencias_id_aceites_foreign` FOREIGN KEY (`id_aceites`) REFERENCES `aceites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
