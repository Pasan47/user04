<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\OrderController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//For books

Route::get('/books',[BookController::class,'index']);
Route::post('/books/addBook',[BookController::class,'create']);
Route::get('/books/showBook/{id}',[BookController::class,'show']);
Route::delete('/books/deleteBook/{id}',[BookController::class,'destroy']);
Route::put('/books/editBook/{id}',[BookController::class,'edit']);

//for Orders

Route::get('/orders',[OrderController::class,'index']);
Route::post('/orders/addOrder',[OrderController::class,'create']);
Route::get('/orders/showOrder/{id}',[OrderController::class,'show']);
Route::delete('/orders/deleteOrder/{id}',[OrderController::class,'destroy']);
Route::put('/orders/editOrder/{id}',[OrderController::class,'edit']);