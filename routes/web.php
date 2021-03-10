<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;

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
    return view('welcome');
});
Route::resource('/user',UserController::class);
Route::post('/logout',[UserController::class,'logout']);
Route::get('/test',function(){
    return view('test');
});

Route::resource('/product',ProductController::class);
Route::resource('/comment',CommentController::class);

Route::post('/forgotpassword',[UserController::class,'forgotPassword']);