<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;


class WeatherController extends Controller
{
    public function getWeatherData(Request $request){
        $location_id = $request["location_id"];
        $client = new Client();
        $base_url = "http://api.openweathermap.org/data/2.5/forecast/";
        $api_key = config("services.weather_forecast.key");
        $url = $base_url . "?id=" . $location_id . "&lang=ja&units=metric&appid=" . $api_key;
        $response = $client->request("GET", $url);
        $weather_data = $response->getBody();
        $weather_data = json_decode($weather_data, true);
        
        return response()->json(["weather_data" => $weather_data]);
   }
}
