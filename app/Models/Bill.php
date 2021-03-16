<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    protected $fillable = ['bill_id','user_id','address','cost','phone_number'];

    public function orders() {
        return $this->hasMany('App\Models\Order');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
