<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
      
            'title'=>$this->faker->name,
            'price'=>$this->faker->numberBetween(100000,1000000),
            'image'=>'/images/products/product-img' . rand(1,6) . '.png',
            'description'=>$this->faker->sentence(),
        ];
    }
}