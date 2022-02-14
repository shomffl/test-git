<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GetWeatherDataRequest;
use GuzzleHttp\Client;


class WeatherController extends Controller
{
    public function getWeatherData(Request $request){
        $location_id = $request["location_id"];
        
        // 天気予報データを取得するための関数を呼び出す処理
        $weather = new GetWeatherDataRequest();
        $weather_data = $weather->getWeatherData($location_id);
        
        $weather_array = array();
        foreach($weather_data as $data){
            $one_data = array("日付" => $data["dt_txt"]);
            array_push($weather_array, $one_data);
        }
        logger($weather_array);
        return response()->json(["weather_data" => $weather_array]);
   }
}
