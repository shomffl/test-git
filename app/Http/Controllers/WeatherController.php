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
            
            $weather_info = WeatherController::weather_info($one_of_data);
        
            $date = $one_of_data["dt_txt"];
            
            $temp = $one_of_data["main"]["temp"];
            
            $humidity = $one_of_data["main"]["humidity"]; 
            
            $wind_spped = $one_of_data["wind"]["speed"];
            
            $wind = WeatherController::wind_info($one_of_data["wind"]["speed"]);
            
            $one_of_forecast_array = array("日付" => $date, "天気" => $weather_info, "気温" => $temp, "湿度" => $humidity, "風" => $wind);
            array_push($weather_array, $one_of_forecast_array);
        }
        return response()->json(["weather_data" => $weather_array]);
   }
   // 天気に関する基本情報を加工するための関数
   public function weather_info($one_of_data)
   {    
        # 天気の概要
        $overview = $one_of_data["weather"][0]["main"];
        
        # 天気の詳細
        $detail = $one_of_data["weather"][0]["description"];
        
        # 外干しの可否
        $judgment_weather_condition = WeatherController::weather_condition($one_of_data["weather"][0]["main"]);
        
        # 天気に対応したアイコン
        $icon = "http://openweathermap.org/img/wn/" . $one_of_data["weather"][0]["icon"] . "@2x.png";
        

        # 上記のデータを連想配列形式にする
        $weather = array("概要" => $overview, "詳細" => $detail, "外干しの可否" => $judgment_weather_condition, "画像" => $icon);
        
        return $weather;
   }
   
   public function wind_info($weather)
   {
        # 引数として渡された値を風速としてそのまま格納
        $wind_speed = $weather;
        
        # wind_condition関数を呼び出して、返却された値を変数に格納
        $wind_condition = WeatherController::wind_condition($wind_speed);
        
        #　上記のデータを連想配列形式に格納する
        $wind = array("風速" => $wind_speed, "風の状態" => $wind_condition);
        
        return $wind;
   }
   
   // 外干しをできるかどうか判別するための関数
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
   
   # 風速から洗濯物を外干ししても飛ばないか判定
   public function wind_condition($weather)
   {
    $convert_wind = (float) $weather;
    $condition_text = "";
    if ($convert_wind >= 7.0){
        $condition_text = "風が強いです。室内干しを検討しましょう。";
    }elseif ($convert_wind >= 4.0){
        $condition_text = "少し風が強いです。洗濯物が飛ばないように気を付けましょう。";
    }elseif ($convert_wind >= 1.6){
        $condition_text = "心地いい風です。";
    }elseif ($convert_wind < 1.6){
        $condition_text = "風は殆どありません。";
    }
    return $condition_text;
   }
}
