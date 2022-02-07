<?php
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['api']], function () {
    Route::get("index", "AuthController@index");
    Route::post("register", "AuthController@register");
    Route::post("login", "AuthController@login");
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });