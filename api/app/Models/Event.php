<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'color'];

    public function customer()
    {
        $this->belongsTo(Customer::class);
    }

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
