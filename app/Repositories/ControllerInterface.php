<?php

namespace App\Http\Controllers;

use Illuminate\Cache\Repository;

interface ControllerInterface
{
    /**
     * show all
     */
    public function index();

    // /**
    //  * show concrette model by ID
    //  * @param number $id
    //  */
    // public function show($id);

    // /**
    //  * create model
    //  */
    // public function create();

    // /**
    //  * store created model
    //  * @param class $request
    //  */
    // public function store($request);

    // /**
    //  * call to update model
    //  * @param number $id
    //  */
    // public function update($id);

    // /**
    //  * store updated model
    //  * @param class $response
    //  */
    // public function updateStore($request);

    // /**
    //  * find text by column in table
    //  * @param str $type
    //  * @param str $byColumn
    //  */
    // public function find($type, $byColumn);

    // /**
    //  * delete
    //  * @param number $id ID
    //  */
    // public function delete($id);
}
