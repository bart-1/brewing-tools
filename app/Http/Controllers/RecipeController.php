<?php

namespace App\Http\Controllers;

use App\Repositories\RecipeRepository;

class RecipeController extends Controller implements ControllerInterface
{
    protected $repository;

    public function __construct(RecipeRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
      return $this->repository->getAll();

    }
}
