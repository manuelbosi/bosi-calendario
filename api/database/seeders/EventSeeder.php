<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::factory()
            ->count(20)
            ->make()
            ->each(function ($event) {
            $customer = Customer::inRandomOrder()->first();
            $user = User::all()->first();

            $event->customer()->associate($customer);
            $event->user()->associate($user);

            $event->save();

        });
    }
}
