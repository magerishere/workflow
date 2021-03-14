<?php

namespace App\Listeners;

use App\Events\OrderStoreEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Order;
use App\Models\Bill;
use Illuminate\Support\Facades\Auth;
class OrderStoreListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  OrderStoreEvent  $event
     * @return void
     */
    public function handle(OrderStoreEvent $event)
    {
        //
        $bill = Bill::create([
            'user_id'=>Auth::id(),
            'address'=>$event->address,
            'cost'=>$event->cost,
        ]);
        if($bill) {
            foreach($event->orders as $order) {
    
                Order::create([
                    'user_id'=>Auth::id(),
                    'product_id'=>$order['id'],
                    'quantity'=>$order['count'],
                    'status'=>false,
                    'bill_id'=>$bill->id,
                ]);
            }
            return response()->json(['status'=>200]);
        }

        return response()->json(['status'=>400]);
    }
}
