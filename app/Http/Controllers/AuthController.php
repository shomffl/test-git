<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    public function index(){
        // $user = User::all();
        $user = User::where('email', "sho@gmail.com")->get();
        logger($user[0]["email"]);
        return response()->json($user);
    }
    public function register(Request $request)
    {
        $input = new User;
        logger($request);
        $input->name = $request["name"];
        $input->email = $request["email"];
        $input->password = Hash::make($request["password"]);
        $input->save();
        return response()->json($input);
    }
    public function login(Request $request)
    {   
        $user = User::where("email", $request["email"])->first();
        $error_judgement = "false";
        $text = "";
        $user_id = "";
        
        if ($user != null){
            if (Hash::check($request["password"], $user["password"] ,)){
                $text = "ログインに成功しました";
                $error_judgement = "false";
                $user_id = $user["id"];
            } else{
                $error_judgement = "true";
                $text = "ログインに失敗しました";
            }
        }else{
            $error_judgement = "true";
            $text = "ログインに失敗しました";
        }
        
        logger($text);
        logger($error_judgement);

        
        return response()->json(["error_judgement" => $error_judgement, "user_id" => $user_id]);
    }
    public function update(Request $request, User $user){
        $input_user_id = $request["user_id"];
        $input_locations = $request["locations"];
        logger($input_user_id);
        logger($input_locations);
        $user = User::find($input_user_id);
        logger($user);
        $user->locations()->attach($input_locations);
        
        return response()->json(["user_id" => $input_user_id, "locations" => $input_locations]);
    }
}
