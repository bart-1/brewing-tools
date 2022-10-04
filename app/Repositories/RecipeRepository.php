<?php
namespace App\Repositories;

use App\Models\Recipe;
use App\Repositories\BaseRepository\BaseRepository;

class RecipeRepository extends BaseRepository
{
    public function __construct(Recipe $model)
    {
        $this->model = $model;
    }

    public function getAllByType($type)
    {
        return $this->model->where('type' === $type)->orderBy('id', 'asc')->get();
    }

    public function findByRecipeStartEndDate($date)
    {
        return $this->model->where([['start_date', 'LIKE', '%' . $date . '%'], ['end_date']])->orderBy('id', 'asc')->get();
    }

    public function findByDataUpdateDate($date)
    {
        return $this->model->where('updated_at', 'LIKE', '%' . $date . '%')->orderBy('id', 'asc')->get();
    }
}
