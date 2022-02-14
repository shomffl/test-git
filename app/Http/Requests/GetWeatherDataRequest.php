<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use GuzzleHttp\Client;


class GetWeatherDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
    
    public function getWeatherData($location_id)
    {   
        // Guzzleのインスタンスを作成
        $client = new Client();
        
        // openWeatherMapのURLと必要なクエリパラメーター
        $base_url = "http://api.openweathermap.org/data/2.5/forecast/";
        $api_key = config("services.weather_forecast.key");
        $url = $base_url . "?id=" . $location_id . "&lang=ja&cnt=3&units=metric&appid=" . $api_key;
        
        // リクエストの送信処理 
        $response = $client->request("GET", $url);
        
        // レスポンス結果をjson形式にデコード
        $forecast_data = json_decode($response->getBody(), true);
        
        return $forecast_data["list"];
    }
}
