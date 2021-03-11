<?php

namespace App\Listeners;

use App\Events\LogoutEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;

class LogoutListener
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
     * @param  LogoutEvent  $event
     * @return void
     */
    public function handle(LogoutEvent $event)
    {
        //
        Auth::logout();

        $event->request->session()->invalidate();
        $event->request->session()->regenerateToken();

        return response()->json(['status'=>200]);
    }
}
