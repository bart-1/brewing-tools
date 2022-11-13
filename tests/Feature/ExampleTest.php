<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_the_route_panel_is_only_for_registred_users()
    {
        $this
            ->get(route('panel'))
            ->assertOK()
            ->assertInertia(fn(AssertableInertia $page) => $page
                    ->component('Auth\Login'))
            ->has('errors')
            ->where('errors', []);
    }

}
