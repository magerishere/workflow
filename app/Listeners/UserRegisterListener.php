<?php

namespace App\Listeners;

use App\Events\UserRegisterEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
class UserRegisterListener
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
     * @param  UserRegisterEvent  $event
     * @return void
     */
    public function handle(UserRegisterEvent $event)
    {
        // if user want register with email
        if(filter_var($event->email,FILTER_VALIDATE_EMAIL)) 
        {
            if(!User::where(['email'=>$event->email])->exists())
            {
                User::create([
                    'email'=>$event->email,
                    'password'=>bcrypt($event->password),
                ]);
                return response()->json(['status'=>200]);
            }
        }

        // if user want register with phone number
        if(is_numeric($event->email))
        {
            if(!User::where(['phone_number'=>$event->email])->exists())
            {
                User::create([
                    'phone_number'=>$event->email,
                    'password'=>bcrypt($event->password),
                ]);
                return response()->json(['status'=>200]);
            }
        }

        return response()->json(['status'=>400]);
    }
}
