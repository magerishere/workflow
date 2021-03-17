<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;



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
// Route Resource
Route::resource('/user',UserController::class);
Route::resource('/product',ProductController::class);
Route::resource('/comment',CommentController::class);
Route::resource('/order',OrderController::class);

// Route Post
Route::post('/user/login',[UserController::class,'login'])->name('user.login');
Route::post('/user/logout',[UserController::class,'logout'])->name('user.logout');
Route::post('/user/forgotpassword',[UserController::class,'forgotPassword'])->name('user.forgotPassword');
Route::post('/user/auth',[UserController::class,'auth'])->name('user.auth');

// if discount code is true
Route::post('/discountcode',function(Request $request){
    if(DB::table('discount_code')->where('code',$request->code)->exists()) {
        return response()->json(['status'=>200]);
    }
    return response()->json(['status'=>400]);
});

// Route Get
Route::get('/user/panel',[UserController::class,'welcome'])->name('user.welcome');
Route::get('/',[UserController::class,'welcome'])->name('welcome');
