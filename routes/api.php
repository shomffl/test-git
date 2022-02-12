<?php
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LocationController;



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['api']], function () {
    Route::post("get", "AuthController@get");
    Route::post("register", "AuthController@register");
    Route::post("login", "AuthController@login");
    Route::get("/location/get", "LocationController@get");
    Route::post("/location/register", "LocationController@register");
    Route::post("/locations/update", "AuthController@update");
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });