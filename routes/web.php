<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserCartController;

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

Route::resource('/user',UserController::class);
Route::resource('/product',ProductController::class);
Route::resource('/comment',CommentController::class);
Route::resource('/usercart',UserCartController::class);


Route::post('/logout',[UserController::class,'logout']);
Route::post('/forgotpassword',[UserController::class,'forgotPassword']);




Route::get('/', function () {
    return view('welcome');
});


Route::get('/test',function(){
    return view('test');
});