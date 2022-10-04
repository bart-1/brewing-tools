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
            'description' => 'cydr z soku jablkowego z dodatkiem aronii',
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
