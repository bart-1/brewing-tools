<?php

namespace App\Http\Controllers;

use App\Repositories\RecipeRepository;

class RecipeController extends Controller
{
    protected $repository;

    public function __construct(RecipeRepository $repository)
    {
        $this->repository = $repository;
    }

}
