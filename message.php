<?php

$JsonHandle = fopen("lastmessage.json", 'w');

$JsonData = '[
    {
        "author": "' . strip_tags($_GET['autor']) . '",
        "message": "' . strip_tags($_GET['msg']) . '"
    }
]';
fwrite($JsonHandle, $JsonData);