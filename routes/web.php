<?php

use App\Domains\Auth\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])->group(function () {
    Route::inertia('/auth', 'auth/index')->name('login');

    Route::post('/auth/login', function (Request $request) {
        Log::info("Auth login field sent: $request->email");
    })->name('auth.login');

    Route::post('/auth/register', RegisterController::class)->name('auth.register');
});

Route::middleware(['auth'])->group(function () {
    Route::inertia('/dashboard', 'main/index')->name('dashboard');
});
