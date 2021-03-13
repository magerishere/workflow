<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','product_id','quantity','status','bill_id'];

    public function bill() {
        return $this->belongsTo('App\Models\Bill');
    }

    //Relation for product model to give detail order like image and name ..
    public function product() {
        return $this->belongsTo('App\Models\Product');
    }
}
