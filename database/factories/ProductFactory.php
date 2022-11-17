<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $product_names = ['Best Product', 'Sweety Product', 'Good Product', 'Nice Product', 'Reel Product', 'Wow Product', 'New Product'];
        return [
            'name' => $this->faker->name,
            'picture' => $this->faker->imageUrl(),
        ];
    }
}
