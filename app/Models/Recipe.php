<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Recipe extends Pivot
{
    protected $table = 'recipes';
    protected $fillable = [
        'name',
        'description',
        'type',
        'start_date',
        'end_date',
        'avg_fermentation_temp',
        'blg',
        'alcohol',
        'volume',
        'base',
        'hops',
        'yeast',
        'yeast_nutriens',
        'addons',
        'refermentation_dose',

    ];
    protected $casts = [
        // 'addons' => 'array',
        'yeast' => 'array',
        'addons' => 'array',
        'hops' => 'array',
        'yeast' => 'array',
        'base' => 'array',
        'yeast_nutriens' => 'array',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
