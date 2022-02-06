<?php
use Illuminate\Http\Request;
use App\Http\Controllers\WeatherController;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['api']], function () {
    Route::get("get", "WeatherController@index");
});