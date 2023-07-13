<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\aceites;
use Illuminate\Support\Facades\DB;

class AceitesController extends Controller
{

    public function showAceites(Request $request)
    {
        $marca = $request->input('marca');
        $modelo = $request->input('modelo');
        $ano = $request->input('ano');
        $referencia = DB::select('select distinct modelo,marca,referencia,precio from vehiculos,ace_referencias where vehiculos.id=ace_referencias.id_vehiculos and  marca = ? and modelo= ? and fecha = ?', [$marca, $modelo, $ano]);
        return $referencia;
    }

    public function referenciaAceites(string $referencia)
    {
        $referencia = DB::select('select distinct modelo,marca,referencia,precio from vehiculos,ace_referencias where vehiculos.id=ace_referencias.id_vehiculos and referencia = ?', [$referencia]);
        return $referencia;
    }

}
