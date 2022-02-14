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
        foreach($weather_data as $one_of_data){
            $date = array("日付" => $one_of_data["dt_txt"]);
            // $weather_description = array("概要" => $one_of_data["weather"][0]["main"])
            logger($one_of_data);
            array_push($weather_array, $date);
        }
        // logger($weather_array);
        return response()->json(["weather_data" => $weather_array]);
   }
}
