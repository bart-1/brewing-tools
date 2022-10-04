<?php

namespace App\Enums;

class UserRole
{
    const USER = 'user';
    const MODERATOR = 'moderator';
    const ADMINISTRATOR = 'administrator';

    const TYPES = [
        self::USER, self::MODERATOR, self::ADMINISTRATOR
    ];
}
