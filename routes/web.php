<?php

use App\Http\Controllers\PanelPageController;
use App\Http\Controllers\StartPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return redirect('/start');
});

Route::get('/start', [StartPageController::class, 'index'])->name('Start');

Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::get('/panel', [PanelPageController::class, 'index'])->name('Panel');
    Route::get('/panel/{id}', [PanelPageController::class, 'show'])->name('Panel');
});

// Route::get('/panel/recipes/{id}', [PanelPageController::class, 'index'])->name('Panel')->middleware('isFriend:{id}');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
