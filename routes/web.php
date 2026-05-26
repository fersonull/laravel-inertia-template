<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['guest'])->group(function () {
    Route::inertia('/auth', 'auth/index')->name('login');
});
