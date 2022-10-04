<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'bart-1',
            'email' => 'studio@dziwnykot.pl',
            'password' => bcrypt('1111'),
            'phone' => '504399023',
            'country' => 'Polska',

        ]);
        DB::table('users')->insert([
            'name' => 'Jan Kowalski',
            'email' => 'dom@dziwnykot.pl',
            'password' => bcrypt('1111'),
            'phone' => '666123123',
            'country' => 'Poland',

        ]);
        DB::table('users')->insert([
            'name' => 'Marek Zegarek',
            'email' => 'mz@dk.pl',
            'password' => bcrypt('1111'),
            'phone' => '+125856545',
            'country' => 'Poland',

        ]);
        DB::table('users')->insert([
            'name' => 'Henryk Kogut',
            'email' => 'hk@dftyu.pl',
            'password' => bcrypt('1111'),
            'phone' => '+12352335654545',
            'country' => 'Poland',

        ]);

    }
}
