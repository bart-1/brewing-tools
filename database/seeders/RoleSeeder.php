<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Enums\UserRole;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(UserRole::TYPES as $value) {

            DB::table('roles')->insert([
                'name' => $value
            ]);
        }

    }
}
