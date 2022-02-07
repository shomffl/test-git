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
        
        if ($user != null){
            if ($user["name"] == $request["name"]){
                if (Hash::check($request["password"], $user["password"] ,)){
                    $text = "ログインに成功しました";
                    $error_judgement = "false";
                } else{
                    $error_judgement = "true";
                    $text = "ログインに失敗しました";
                }
            }else{
                $error_judgement = "true";
                $text = "ログインに失敗しました";
            }
        }else{
            $error_judgement = "true";
            $text = "ログインに失敗しました";
        }
        
        logger($text);
        logger($error_judgement);

        
        return response()->json(["error_judgement" => $error_judgement]);
    }
}
