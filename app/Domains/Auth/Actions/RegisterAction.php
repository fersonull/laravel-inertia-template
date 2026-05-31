<?php

namespace App\Domains\Auth\Actions;

use App\Domains\Auth\DTOs\RegisterDTO;
use App\Domains\Auth\Services\AuthService;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class RegisterAction
{
    public function __construct(private AuthService $service) {}

    public function execute(RegisterDTO $data): User
    {
        return DB::transaction(function () use ($data) {
            $user =  $this->service->register($data);

            return $user;
        });
    }
}
