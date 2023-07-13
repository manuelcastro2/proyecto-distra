<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class referenciasaceites extends Model
{
    use HasFactory;

    protected $filltable=['referencia','precio','id_vehiculos'];
}
