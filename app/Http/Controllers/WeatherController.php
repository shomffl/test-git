<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function getWeatherData(Request $request){
      logger($request);
      $client = new \GuzzleHttp\Client();
      $base_url = "http://api.openweathermap.org/data/2.5/forecast/"
      
      
      return response()->json(["weather_data" => $request->location_id]);
   }
}
