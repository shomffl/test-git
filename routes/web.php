<?php


Route::get('/{any}', function(){
    return view('index');
})->where('any', '.*'); 
Auth::routes();




// Route::get('/home', 'HomeController@index')->name('home');
