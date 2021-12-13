<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->words(3, true),
            'date_start' =>  $this->faker->dateTimeBetween('+0 week', '+1 week'),
            'date_end' =>  $this->faker->dateTimeBetween('+1 week', '+2 week'),
            'color' => $this->faker->hexColor()
        ];
    }
}
