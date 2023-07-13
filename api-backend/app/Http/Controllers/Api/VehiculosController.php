<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\vehiculos;
use Illuminate\Support\Facades\DB;

class VehiculosController extends Controller
{

    public function marcas()
    {
        $filtro = DB::select('SELECT DISTINCT marca FROM vehiculos');
        return $filtro;
    }

    public function modelo(Request $request)
    {
        $marca = $request->input('marca');
        $modelo = DB::select('select distinct modelo from vehiculos where marca=?', [$marca]);
        return $modelo;

    }

    public function fecha(Request $request)
    {
        $fecha = $request->input('modelo');
        $modelo = DB::select('select distinct fecha from vehiculos where modelo=?', [$fecha]);
        return $modelo;

    }

}
