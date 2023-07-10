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
    /**
     * Store a newly created resource in storage.
     */
    public function marcas(Request $request)
    {
        $filtro = $request->input('filtro');
        $marca = filtros::query()->distinct()->select('marca')->where('filtro', $filtro)->get();
        return $marca;

    }

    public function modelo(Request $request)
    {
        $marca = $request->input('marca');
        $filtro = $request->input('filtro');
        $modelo = filtros::query()->select('modelo', 'id')->where('marca', $marca)->where('filtro', $filtro)->get();
        return $modelo;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $marca, string $modelo)
    {
        $referencia = DB::select('select distinct filtro,modelo,marca,referencia from filtros,fil_referencias where filtros.id=fil_referencias.id_filtros and marca=?', [$marca], 'and modelo = ?', [$modelo]);
        return $referencia;
    }

    public function referencia(string $referencia)
    {
        $referencia = DB::select('select distinct filtro,modelo,marca,referencia from filtros,fil_referencias where filtros.id=fil_referencias.id_filtros and referencia = ?', [$referencia]);
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
