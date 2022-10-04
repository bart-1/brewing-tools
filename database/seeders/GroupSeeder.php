<?php

namespace Database\Seeders;

use App\Enums\UserGroups;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (UserGroups::TYPES as $value) {

            DB::table('groups')->insert([
                'name' => $value,
            ]);
        }

    }
}
