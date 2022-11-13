<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{

    protected $routeName;

    public function __construct(Request $request)
    {
        $this->routeName = $request->route()->getName();
    }

}
