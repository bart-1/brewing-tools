<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('recipes')->insert([
            'user_id' => 1,
            'name' => 'Cydr 2022',
            'description' => 'cydr z soku jablkowego',
            'type' => 'cider',
            'start_date' => '2022_09_11',
            'end_date' => '2022_11_11',
            'avg_fermentation_temp' => 23,
            'blg' => 10.5,
            'end_blg' => 4,
            'alcohol' => 5,
            'volume' => 12,
            'base' => '{"apple juice": "10l", "aronia": "2kg"}',
            'addons' => '{"trawa żubrówka": "5g"}',
            'refermentation_dose' => 4.5,

        ]);

        DB::table('recipes')->insert([
            'user_id' => 1,
            'name' => 'Cydr Aronia',
            'description' => 'cydr z soku jablkowego z dodatkiem aronii',
            'type' => 'cider',
            'start_date' => '2021_05_13',
            'end_date' => '2021_06_01',
            'avg_fermentation_temp' => 23.5,
            'blg' => 11.5,
            'end_blg' => 4,
            'alcohol' => 4.5,
            'volume' => 22,
            'base' => '{"apple juice": "20l", "aronia": "3kg"}',
            'addons' => '{"trawa żubrówka": "5g"}',
            'refermentation_dose' => 4.5,

        ]);
        DB::table('recipes')->insert([
            'user_id' => 1,
            'name' => 'Piwo',
            'description' => 'Porter Bałtycki',
            'type' => 'beer',
            'start_date' => '2021_05_13',
            'end_date' => '2021_06_01',
            'avg_fermentation_temp' => 21.5,
            'blg' => 26.5,
            'end_blg' => 8,
            'alcohol' => 12.5,
            'volume' => 22,
            'base' => '{"słód jęczmienny palony": "20kg", "słód pilzneński" : "10kg"}',
            'hops' => '{"marynka" : "100g", "cascade": "50g"}',
            'yeast' => '{"y200" : "50g"}',
            'yeast_nutriens' => '{"turbo" : "10g"}',
            'addons' => '{"kawa": "500g"}',
            'refermentation_dose' => 4.5,

        ]);

// ;
// name
// description
// type', ['cider', 'beer', 'wine']
// start_date
// end_date
// avg_fermentation_temp
// blg
// end_blg
// alcohol
// volume
// base
// hops
// yeast'
// yeast_nutriens
// addons
// refermentation_dose

    }
}
