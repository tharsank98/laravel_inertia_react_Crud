<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     return inertia::render('Home',['name'=>'Tharsan']);
// });

//Route::inertia('/','Home');
Route::get('/',[PostController::class,'index']);
Route::resource('post',PostController::class)->except('index');
