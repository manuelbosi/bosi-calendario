<?php

namespace App\Http\Controllers;

use App\Http\Traits\ApiResponse;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    use ApiResponse;

    public function index()
    {
        $customers = Customer::all();
        return $this->success(null, $customers);
    }
}
