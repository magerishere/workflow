<?php

namespace App\Listeners;

use App\Events\UserHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
class UserRegisterWithEmailListener
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
        // Register user with email

        //Check if request was register
        if($event->confirm) {
            //Check if request was email
            if(filter_var($event->email,FILTER_VALIDATE_EMAIL)) {
                User::create([
                    'email'=>$event->email,
                    'password'=>bcrypt($event->password),
                ]);
            }
        }
        
    }
}
