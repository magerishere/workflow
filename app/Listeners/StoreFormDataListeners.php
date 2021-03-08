<?php

namespace App\Listeners;

use App\Events\RegisterHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
class StoreFormDataListeners
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
     * @param  RegisterHandlerEvent  $event
     * @return void
     */
    public function handle(RegisterHandlerEvent $event)
    {
        //
        if(User::where(['email'=>$event->email])->exists()) {
            return response()->json(['status'=>400]); 
        } else {
            $user = User::create([
                'name'=> str_replace('@gmail.com','',$event->email),
                'email'=>$event->email,
                'password'=>bcrypt($event->password),
            ]);

            return response()->json(['status'=>200]);
        }


    
        
    }
}
