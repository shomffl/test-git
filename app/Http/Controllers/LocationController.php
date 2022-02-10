<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Location;

class LocationController extends Controller
{
   public function get(Location $location){
      return response()->json(["locations" => $location->get()]);
   }
   
   public function register(Request $request, Location $location){
      $city_name = $request["city_name"];
      $city_code = $request["city_code"];
      $input = ["name"=>$city_name, "name_id"=>$city_code];
      $location->fill($input)->save();
      return response()->json($input);
   }
   
   public function update(Request $request){
      logger($request);
   }
}
