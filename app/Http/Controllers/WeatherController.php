<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function getWeatherData(Request $request){
      logger($request);
      
      return response()->json(["weather_data" => $request->location_id]);
   }
}
