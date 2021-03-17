<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\ForgotPasswordEvent;
use App\Events\UserLoginEvent;
use App\Events\UserRegisterEvent;
use App\Events\LogoutEvent;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if(Auth::check())  return 'auth' . Auth::id();
     
        return 'customer';
       
      

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      return  event(new UserRegisterEvent($request));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //      
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        return event(new UserLoginEvent($request));
    }

    public function logout(Request $request)
    {

      return event(new LogoutEvent($request));
     
    }

    public function forgotPassword(Request $request)
    {
        return event(new ForgotPasswordEvent($request->email));
            
    }

    public function auth(Request $request)
    {
        return response()->json(['auth'=>Auth::user()]);
    }

    public function welcome() 
    {
        return view('welcome');
    }


}
