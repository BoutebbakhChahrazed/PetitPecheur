<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ReservationController;

// Public routes
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/reservation', [ReservationController::class, 'store']);

