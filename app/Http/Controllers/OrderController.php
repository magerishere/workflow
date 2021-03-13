<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Bill;
use App\Models\Product;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
       $bills =  Bill::where(['user_id'=>Auth::id()])->get();

        return response()->json(['status'=>200,'bills'=>$bills]);
      
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $bill = Bill::create([
            'user_id'=>Auth::id(),
            'address'=>$request->address,
            'cost'=>$request->cost,
        ]);
        if($bill) {
            foreach($request->orders as $order) {
    
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $bill = Bill::find($id)->first();
       $orders = Order::where(['bill_id'=>$id])->get();
      
        $details = array();
        foreach($orders as $order) {
        array_push($details,$order->product()->first());
        }

        for($i = 0;$i < count($details);$i++) {
            $details[$i]['quantity'] = $orders[$i]->quantity;
        }
        
    
        
        return response()->json(['status'=>200,'bill'=>$bill,'details'=>$details]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
