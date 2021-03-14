<?php

namespace App\Listeners;

use App\Events\OrderShowEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Bill;
use App\Models\Order;
class OrderShowListener
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
     * @param  OrderShowEvent  $event
     * @return void
     */
    public function handle(OrderShowEvent $event)
    {
        //
        $bill = Bill::find($event->id);
        $orders = Order::where(['bill_id'=>$event->id])->get();
       
         $details = array();
         foreach($orders as $order) {
         array_push($details,$order->product()->first());
         }
 
         for($i = 0;$i < count($details);$i++) {
             $details[$i]['quantity'] = $orders[$i]->quantity;
         }
         
         $email = $bill->user()->first()->email;
     
         
         return response()->json(['status'=>200,'bill'=>$bill,'details'=>$details,'email'=>$email]);
    }
}
