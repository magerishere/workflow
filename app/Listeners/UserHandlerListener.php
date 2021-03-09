<?php

namespace App\Listeners;

use App\Events\UserHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserHandlerListener
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
        // for register and login users


        $result = false;
        // if request was register 
        if($event->confirm) {
             if(!User::where(['email'=>$event->email])->exists()) 
             {
                 $user = User::create([
                    'name'=> str_replace('@gmail.com','',$event->email),
                    'email'=>$event->email,
                    'password'=>bcrypt($event->password)
                ]);
                if($user) $result = true;
             }
          }

          //check if register success OR request was login
        if($result || !$event->confirm) {
           if(Auth::attempt(['email'=>$event->email,'password'=>$event->password])) 
           {
               $event->request->session()->regenerate();
               return response()->json(['status'=>200]);
           }
        }

        return response()->json(['status'=>400]);
    }
}
