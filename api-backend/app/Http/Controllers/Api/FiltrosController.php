<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\filtros;

class FiltrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function filtros()
    {
        $filtro = DB::select('SELECT DISTINCT filtro FROM filtros');
        return $filtro;
    }

    public function show(string $marca, string $modelo,string $filtro)
    {
        $referencia = DB::select('select distinct filtro,modelo,marca,referencia,precio from filtros,fil_referencias,vehiculos where filtros.id=fil_referencias.id_filtros and vehiculos.id=fil_referencias.id_vehiculos and marca=?', [$marca], 'and modelo = ?', [$modelo], 'and filtro=?', [$filtro]);
        return $referencia;
    }

    public function referencia(string $referencia)
    {
        $referencia = DB::select('select distinct filtro,modelo,marca,referencia,precio from filtros,fil_referencias,vehiculos where filtros.id=fil_referencias.id_filtros and vehiculos.id=fil_referencias.id_vehiculos and referencia = ?', [$referencia]);
        return $referencia;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
