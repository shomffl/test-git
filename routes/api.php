<?php
use Illuminate\Http\Request;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\AuthController;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['api']], function () {
    Route::get("get", "WeatherController@index");
    Route::get("index", "AuthController@index");
    Route::post("create", "AuthController@create");
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});