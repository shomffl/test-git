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
            $one_of_forecast_array = array();
            
            $judgment_weather_condition = WeatherController::weather_condition($one_of_data["weather"][0]["main"]);
            
            $weather = array("概要" => $one_of_data["weather"][0]["main"], "詳細" => $one_of_data["weather"][0]["description"], "外干しの可否" => $judgment_weather_condition);
            $date = array("日付" => $one_of_data["dt_txt"]);

            array_push($one_of_forecast_array, $date, $weather);
            array_push($weather_array, $one_of_forecast_array);
        }
        logger($weather_array);
        return response()->json(["weather_data" => $weather_array]);
   }
   public function weather_condition($weather)
   {
        $condition_text = "";
        if ($weather == "Clear"){
            $condition_text = "洗濯日和です。";
        }elseif ($weather == "Clouds"){
            $condition_text = "洗濯物が乾くのに少し時間がかかるかも知れません。";
        }elseif ($weather == "Snow"){
            $condition_text = "室内干しを検討しましょう。";
        }elseif ($weather == "Rain"){
            $condition_text = "室内干しにしましょう。";
        }elseif ($weather == "Drizzle"){
            $condition_text = "室内干しにしましょう。";
        }elseif ($weather == "Thunderstorm"){
            $condition_text = "室内干しにしましょう。";
        }else{
            $condition_text = "室内干しを検討しましょう。";
        }

        return $condition_text;
   }
}
