<?php

namespace App\Http\Controllers;

use App\Repositories\RecipeRepository;
use Inertia\Inertia;

class PanelPageController extends PageController
{

    public function index(RecipeRepository $recipe)
    {
        $data = $recipe->getAll(['id', 'name', 'description', 'user_id', 'updated_at']);
        // $data->makeHidden(['created_at', 'updated_at', 'user_id', 'visibility']);
        // $data->makeVisible(['name', 'id']);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'allDataPack' => $data,
            'singleDataPack' => '',
            'helpersList' => ['RecipeList']
        ]);
    }

    public function show(RecipeRepository $recipe, $id)
    {
        $data = $recipe->getAll(['id', 'name', 'description', 'user_id', 'updated_at']);
        $concreteData = $recipe->getOne($id);
        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'singleDataPack' => $concreteData,
            'allDataPack' => $data,
            'helpersList' => ['RecipeList']
        ]);

    }
}
