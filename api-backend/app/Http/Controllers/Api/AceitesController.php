<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\aceites;
use Illuminate\Support\Facades\DB;

class AceitesController extends Controller
{

    public function marcas2()
    {
        $filtro = DB::select('SELECT DISTINCT marca FROM aceites');
        return $filtro;
    }

    public function modelo2(Request $request)
    {
        $marca = $request->input('marca');
        $modelo = aceites::query()->select('modelo')->where('marca', $marca)->get();
        return $modelo;

    }

}
