<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserCartController;
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

Route::resource('/user',UserController::class);
Route::resource('/product',ProductController::class);
Route::resource('/comment',CommentController::class);
Route::resource('/usercart',UserCartController::class);

//For logout users
Route::post('/logout',[UserController::class,'logout']);
// For send email when tap in forgotpassword
Route::post('/forgotpassword',[UserController::class,'forgotPassword']);
//For Auth Check
Route::post('/auth',[UserController::class,'auth']);

// if discount code is true
Route::post('/discountcode',function(Request $request){
    if(DB::table('discount_code')->where('code',$request->code)->exists()) {
        return response()->json(['status'=>200]);
    }
    return response()->json(['status'=>400]);
});




Route::get('/', function () {
      
    return view('welcome');
    
});


Route::get('/test',function(){
    return view('test');
});