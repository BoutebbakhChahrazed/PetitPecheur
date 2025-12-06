<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
     ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php', // <--- THIS LINE IS MISSING
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
   ->withMiddleware(function (Middleware $middleware) {
        // Add this block to configure CORS
        $middleware->validateCsrfTokens(except: [
            'api/*', // Skip CSRF for API routes if needed
        ]);
        
        // Laravel 11 handles CORS automatically if you have API routes,
        // but to customize allowed origins (like your React app):
        $middleware->append(\Illuminate\Http\Middleware\HandleCors::class);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
