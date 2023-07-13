-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2023 a las 17:25:32
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ace_referencias`
--

CREATE TABLE `ace_referencias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `referencia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double(8,3) NOT NULL,
  `id_aceites` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ace_referencias`
--

INSERT INTO `ace_referencias` (`id`, `referencia`, `precio`, `id_aceites`, `created_at`, `updated_at`) VALUES
(1, 'Aceite 15w50 4t Sintetico Liqui Moly', 170.000, 2, '2023-06-29 03:08:48', '2023-06-29 03:08:48'),
(2, 'Aceite para motor Liqui Moly 10W-30', 157.500, 2, '2023-06-29 03:08:48', '2023-06-29 03:08:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'filtro de aire', 'chevrolet', 'spark gt', '2023-06-29 07:57:42', '2023-06-29 07:57:42'),
(2, 'filtro de aire', 'kia', 'picanto', '2023-06-29 07:58:32', '2023-06-29 07:58:32'),
(3, 'filtro de aceite', 'nissan', 'march', '2023-06-29 08:01:38', '2023-06-29 08:01:38'),
(4, 'filtro de aceite', 'renault', 'sandero', '2023-06-29 08:04:54', '2023-06-29 08:04:54'),
(5, 'filtro de combustible', 'hyundai', 'HB20 Hatchback', '2023-06-29 08:06:44', '2023-06-29 08:06:44'),
(6, 'filtro de combustible', 'mazda', 'mazda3', '2023-06-29 08:08:48', '2023-06-29 08:08:48'),
(7, 'filtro de cabina', 'suzuki', 'vitara 4x4', '2023-06-29 08:09:28', '2023-06-29 08:09:28'),
(8, 'filtro de cabina', 'audi', 'A3', '2023-06-29 08:11:08', '2023-06-29 08:11:08'),
(10, 'filtro de aire', 'chevrolet', 'aveo', '2023-06-29 07:58:32', '2023-06-29 07:58:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fil_referencias`
--

CREATE TABLE `fil_referencias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `referencia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double(8,3) NOT NULL,
  `id_filtros` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fil_referencias`
--

INSERT INTO `fil_referencias` (`id`, `referencia`, `precio`, `id_filtros`, `created_at`, `updated_at`) VALUES
(1, 'FILTRO AIRE CHEVROLET AVEO DIESEL 2008-2013', 30.300, 10, '2023-06-29 02:57:42', '2023-06-29 02:57:42'),
(2, 'FILTRO AIRE CHEVROLET AVEO DIESEL 2016-2019', 25.500, 10, '2023-06-29 02:57:42', '2023-06-29 02:57:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_27_233123_create_filtros_table', 1),
(6, '2023_07_05_155128_create_referencias_table', 1),
(7, '2023_07_05_223136_create_aceites_table', 1),
(8, '2023_07_05_223213_create_referenciasaceites_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- Indices de la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ace_referencias_id_aceites_foreign` (`id_aceites`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `filtros`
--
ALTER TABLE `filtros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `filtros_modelo_unique` (`modelo`);

--
-- Indices de la tabla `fil_referencias`
--
ALTER TABLE `fil_referencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fil_referencias_id_filtros_foreign` (`id_filtros`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aceites`
--
ALTER TABLE `aceites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `filtros`
--
ALTER TABLE `filtros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `fil_referencias`
--
ALTER TABLE `fil_referencias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ace_referencias`
--
ALTER TABLE `ace_referencias`
  ADD CONSTRAINT `ace_referencias_id_aceites_foreign` FOREIGN KEY (`id_aceites`) REFERENCES `aceites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `fil_referencias`
--
ALTER TABLE `fil_referencias`
  ADD CONSTRAINT `fil_referencias_id_filtros_foreign` FOREIGN KEY (`id_filtros`) REFERENCES `filtros` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
