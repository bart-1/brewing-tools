<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function hasRole($role)
    {
        if (Auth::user()->role === $role) {
            return true;
        } else {
            return false;
        }

    }
  

    public function isFriend($friend)
    {
        if (Auth::user()->friend === $friend) {
            return true;
        } else {
            return false;
        }
    }

    public function isRecipeOwner($recipe)
    {
        if (Auth::user()->recipe === $recipe) {
            return true;
        } else {
            return false;
        }
    }

    public function recipe()
    {
        return $this->hasMany(Recipe::class, 'user_id');
    }
    public function friend()
    {
        return $this->hasMany(Friend::class, 'member_id');
    }

    public function role()
    {
        return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id');
    }
    public function team()
    {
        return $this->belongsToMany(Team::class, 'teams', 'user_id', 'editor_id');
    }
    // public function group()
    // {
    //     return $this->belongsToMany(Group::class, 'group_user', 'user_id', 'group_id');
    // }
}
