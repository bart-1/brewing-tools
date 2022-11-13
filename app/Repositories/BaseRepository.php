<?php

namespace App\Repositories;

abstract class BaseRepository
{

    protected $model;

    public function getAll($columns = ["*"])
    {
        return $this->model->get($columns);
    }
    public function getAllExclude($columns = [""])
    {
        return $this->model->get($columns);
    }

    public function getOne($id, $columns = ["*"])
    {
        return $this->model->where('id', '=', $id)->select($columns)->get();
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
