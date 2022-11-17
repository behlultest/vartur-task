<?php

namespace App\Custom;

class Response
{
    private $status, $message, $data;

    public static function json($status, $message, $data = null)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ]);
    }
}
