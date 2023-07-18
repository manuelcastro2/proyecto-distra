<?php

use App\Http\Controllers\Api\AceitesController;
use App\Http\Controllers\Api\FiltrosController;
use App\Http\Controllers\Api\VehiculosController;
use App\Http\Controllers\Api\CarritoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(CarritoController::class)->group(function () {
Route::post('/cart', 'agregarCarrito');
Route::get('/cartListar', 'listarCarrito');
Route::delete('/DeleteCart/{id}', 'delete');
Route::put('/UpdateCart/{id}/{cantidad}', 'UpdateCarrito');
});

Route::controller(FiltrosController::class)->group(function () {
    Route::get('/filtros', 'filtros');
    Route::get('/busqueda/{marca}/{modelo}/{filtro}', 'show');
    Route::get('/referencia/{referencia}', 'referencia');
});

Route::controller(AceitesController::class)->group(function () {
    Route::get('/busqueda2', 'showAceites');
    Route::get('/referencia2/{referencia}', 'referenciaAceites');
});

Route::controller(VehiculosController::class)->group(function () {
    Route::get('/marcas', 'marcas');
    Route::get('/modelo', 'modelo');
    Route::get('/fecha', 'fecha');
});

