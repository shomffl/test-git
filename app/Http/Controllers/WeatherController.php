<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function index(){
        return response()->json(["name"=>"Sho Watanabe"]);
    }
}


