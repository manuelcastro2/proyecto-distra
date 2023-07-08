<?php

use App\Http\Controllers\Api\AceitesController;
use App\Http\Controllers\Api\FiltrosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(FiltrosController::class)->group(function(){
    Route::get('/filtros','filtros');
    Route::get('/marcas','marcas');
    Route::get('/modelo','modelo');
    Route::get('/referencia/{id}','show');
    Route::get('/BusquedaMarca','busquedaMarcas');
});

Route::controller(AceitesController::class)->group(function(){
    Route::get('/marcas2','marcas2');
    Route::get('/modelo2','modelo2');
});
