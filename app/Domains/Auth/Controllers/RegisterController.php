<?php

namespace App\Domains\Auth\Controllers;

use App\Domains\Auth\Actions\RegisterAction;
use App\Domains\Auth\DTOs\RegisterDTO;
use App\Domains\Auth\Requests\RegisterRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class RegisterController extends Controller
{
    public function __construct(
        private RegisterAction $action
    ) {}

    /**
     * Handle the incoming request.
     */
    public function __invoke(RegisterRequest $request): RedirectResponse
    {
        $data = RegisterDTO::fromRequest($request);

        $user = $this->action->execute($data);

        return redirect()->intended(route('dashboard'));
    }
}
