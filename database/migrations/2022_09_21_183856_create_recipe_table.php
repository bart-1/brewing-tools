<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->enum('visibility', ['public', 'group', 'private']);
            $table->string('name', 100);
            $table->string('description', 255);
            $table->enum('type', ['cider', 'beer', 'wine'])->default('cider');
            $table->date('start_date');
            $table->date('end_date');
            $table->smallInteger('avg_fermentation_temp')->default(20);
            $table->smallInteger('blg')->unsigned();
            $table->smallInteger('end_blg')->unsigned();
            $table->smallInteger('alcohol')->unsigned();
            $table->smallInteger('volume')->unsigned();
            $table->text('base')->nullable();
            $table->json('hops')->nullable();
            $table->json('yeast')->nullable();
            $table->json('yeast_nutriens')->nullable();
            $table->json('addons')->nullable();
            $table->smallInteger('refermentation_dose')->unsigned();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
};
