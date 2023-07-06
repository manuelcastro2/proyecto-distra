<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ace_referencias', function (Blueprint $table) {
            $table->id();
            $table->string('referencia');
            $table->foreignId('id_aceites')
            ->nullable()
            ->constrained('aceites')
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
        Schema::dropIfExists('referenciasaceites');
    }
};
