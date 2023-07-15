<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\carrito;
use Symfony\Component\Console\Input\Input;

class CarritoController extends Controller
{

    public function agregarCarrito(Request $request)
    {
        $tipo = $request->input('tipo');
        $marca = $request->input('marca');
        $modelo = $request->input('modelo');
        $referencia = $request->input('referencia');
        $precio = $request->input('precio');
        $cantidad = $request->input('cantidad');
        DB::table('carrito')->insert([
            'tipo' => $tipo,
            'marca' => $marca,
            'modelo' => $modelo,
            'referencia' => $referencia,
            'precio' => $precio,
            'cantidad' => $cantidad
        ]);


    }

    public function listarCarrito()
    {
        $carrito= DB::select('select * from carrito');
        return $carrito;
    }

    public function delete(string $id){
        
    }


}
