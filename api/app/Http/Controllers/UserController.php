<?php

namespace App\Http\Controllers;

use App\Http\Traits\ApiResponse;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use ApiResponse;

    /**
     * Attempt to log in a user
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $data = $request->only('email', 'password');

        if (!auth()->attempt($data))
        {
            return $this->error('Email e/o password non validi', null, 422);
        }

        $request->session()->regenerate();

        return $this->success(null, null, 201);
    }

    /**
     * Attempt to register a new user
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        $newUser = array(
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password'))
        );

        User::create($newUser);
        return $this->success(null, null, 201);
    }

    /**
     * Logout a logged user
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        auth()->guard('web')->logout();
        $request->session()->regenerateToken();

        return $this->success();
    }

}
