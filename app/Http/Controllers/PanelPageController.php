<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PanelPageController extends PageController
{

    protected $recipe;
    public function __construct(RecipeController $recipe)
    {
        $this->recipe = $recipe;
    }
    public function index()
    {
        $data = $this->recipe->getAll();
        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'data' => $data
        ]);
    }
}
