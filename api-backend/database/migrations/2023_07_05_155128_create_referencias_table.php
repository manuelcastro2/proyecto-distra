<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fil_referencias', function (Blueprint $table) {
            $table->id();
            $table->string('referencia');
            $table->double("precio", 8, 3);
            $table->foreignId('id_filtros')
                ->nullable()
                ->constrained('filtros')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignId('id_vehiculos')
                ->nullable()
                ->constrained('vehiculos')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('referencias');
    }
};
