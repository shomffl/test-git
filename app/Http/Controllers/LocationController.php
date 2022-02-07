<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LocationController extends Controller
{
    public function users(){
        return $this->belongsToMany("App\User");
    }
}
