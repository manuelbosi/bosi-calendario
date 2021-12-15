<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    /**
     * Return success response from api request
     * @param string|null $message
     * @param array|object|null $data
     * @param int $status
     * @return JsonResponse
     */
    public function success(string $message = null, $data = null, int $status = 200): JsonResponse
    {
        $response = array(
            'message' => $message,
            'data' => $data
        );
        return response()->json($response, $status);
    }

    /**
     * Return error response from api request
     * @param string|null $message
     * @param array|null $data
     * @param int $status
     * @return JsonResponse
     */
    public function error(string $message = null, array $data = null, int $status = 400): JsonResponse
    {
        $response = array(
            'message' => $message,
            'data' => $data
        );
        return response()->json($response, $status);
    }
}
