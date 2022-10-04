<?php

namespace App\Enums;

class UserGroups
{
//no priviliges
    const GUEST = 'guest';

//can see
    const FRIEND = 'friend';

//can see & edit
    const TEAM = 'team';


    const TYPES = [self::GUEST, self::FRIEND, self::TEAM];

}

