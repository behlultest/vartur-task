<?php
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

function UploadImage($file, $path)
{
    $path = $file->hashName($path);
    $image = Image::make($file);
    Storage::put('public/' . $path, (string) $image->encode());

    $url = Storage::url($path);
    return $url;
}
