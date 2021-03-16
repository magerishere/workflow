<?php

namespace App\Listeners;

use App\Events\UserHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;

class UserRegisterWithPhoneNumberListener
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
        //Register with phone number 

        //check if request was register
        if($event->confirm) {
            //check if request was phone number  $event->email = phone number!
            if(is_numeric($event->email)) {
                User::create([
                    'phone_number'=>$event->email,
                    'password'=>bcrypt($event->password),
                ]);
            }
        }
        
    }
}
