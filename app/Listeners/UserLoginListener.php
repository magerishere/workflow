<?php

namespace App\Listeners;

use App\Events\UserHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;
class UserLoginListener
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
     * @param  UserHandlerEvent  $event
     * @return void
     */
    public function handle(UserHandlerEvent $event)
    {
        //Check request was email OR phone number to login
        if(filter_var($event->email,FILTER_VALIDATE_EMAIL)) {
            if(Auth::attempt(['email'=>$event->email,'password'=>$event->password])) 
            {
                $event->request->session()->regenerate();
                return response()->json(['status'=>200]);
            }
        } else if(is_numeric($event->email)) {
            if(Auth::attempt(['phone_number'=>$event->email,'password'=>$event->password])) 
            {
                $event->request->session()->regenerate();
                return response()->json(['status'=>200]);
            }
        }

        return response()->json(['status'=>400]);
    }
}
