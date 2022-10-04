<?php
namespace App\Repositories;

use App\Models\User;
use App\Repositories\BaseRepository\BaseRepository;

class UserRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function getAllByRole($role)
    {
        return $this->model->where('role' === $role)->orderBy('id', 'asc')->get();
    }

    public function findByDataUpdateDate($date)
    {
        return $this->model->where('updated_at', 'LIKE', '%' . $date . '%')->orderBy('id', 'asc')->get();
    }
}
