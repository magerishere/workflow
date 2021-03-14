<?php

namespace App\Listeners;

use App\Events\CommentHandlerEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;
use App\Models\Comment;

class CommentStoreListener
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
     * @param  CommentHandlerEvent  $event
     * @return void
     */
    public function handle(CommentHandlerEvent $event)
    {
        //
        $comment = Comment::create([
            'user_id'=>Auth::id(),
            'product_id'=>$event->product_id,
            'name'=>$event->name,
            'email'=>$event->email,
            'body'=>$event->body
        ]);

        return response()->json(['status'=>200]);
    }
}
