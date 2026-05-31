<?php

namespace App\Domains\Auth\Services;

use App\Domains\Auth\DTOs\RegisterDTO;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register(RegisterDTO $data): User
    {
        $user = User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
        ]);

        Auth::login($user);

        return $user;
    }
}
