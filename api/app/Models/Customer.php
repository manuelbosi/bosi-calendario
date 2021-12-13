<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['name', 'address', 'vat'];

    use HasFactory;

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
