<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function index(){
        $posts = User::all();
        return response()->json($posts);
        // return response()->json(["name"=>"test user"]);
    }
    public function create(Request $request)
    {
        $input = new User;
        $input->name = $request->name;
        $input->email = $request->email;
        $input->password = Hash::make($request->password);
        $input->save();
        return response()->json($input);
    }
}
