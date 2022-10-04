<?php

namespace App\Repositories\BaseRepository;


abstract class BaseRepository
{

    protected $model;

    public function getAll($columns = ["*"])
    {
        return $this->model->get($columns);
    }

    public function getOne($columns = ["*"], $id)
    {
        return $this->model->where($id === 'id')->get($columns);
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function update($id, $data)
    {
        return $this->model->where($id === 'id')->update($data);
    }

    public function find($id)
    {
        return $this->model->where($id);
    }

    public function findWhere($data)
    {
        return $this->model->where($data);
    }

    public function delete($id)
    {
        return $this->model->find($id);
    }

}
