<?php

namespace App\Listeners;

use App\Events\ForgotPasswordEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPassword;


class ForgotPasswordListener
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
     * @param  ForgotPasswordEvent  $event
     * @return void
     */
    public function handle(ForgotPasswordEvent $event)
    {
        //
        $newPassword = rand(9999,999999);
        $user =  User::where(['email'=>$event->email])->first();
        if($user) {
            $user->update([
                'password'=>bcrypt($newPassword),
            ]);
            Mail::to($event->email)->send(new ForgotPassword($newPassword));
            return response()->json(['status'=>200]);
        }

        return response()->json(['status'=>400]);
    }
}
