<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Location extends Model
{
     protected $fillable = [
        "name",
        "name_id",
    ];
    
     public function users(){
        return $this->belongsToMany("App\User");
    }
}
