<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        \App\Events\UserHandlerEvent::class => [
            \App\Listeners\UserRegisterWithEmailListener::class,
            \App\Listeners\UserRegisterWithPhoneNumberListener::class,
            \App\Listeners\UserLoginListener::class,
        ],
        \App\Events\ForgotPasswordEvent::class => [
            \App\Listeners\ForgotPasswordListener::class,
        ],
        \App\Events\LogoutEvent::class => [
            \App\Listeners\LogoutListener::class,
        ],
        \App\Events\CommentHandlerEvent::class => [
            \App\Listeners\CommentStoreListener::class,
        ],
        \App\Events\OrderStoreEvent::class => [
            \App\Listeners\OrderStoreListener::class,
        ],
        \App\Events\OrderShowEvent::class => [
            \App\Listeners\OrderShowListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
