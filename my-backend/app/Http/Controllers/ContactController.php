<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // 1. Validate the incoming request
        // Matches the fields in your ContactPage.jsx
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20', // Optional in your React form
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // 2. Return errors if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // 3. Create the contact record in the database
            $contact = Contact::create($validator->validated());

            // 4. Return success response to React
            return response()->json([
                'status' => 'success',
                'message' => 'Thank you for contacting us! We will get back to you shortly.',
                'data' => $contact
            ], 201);

        } catch (\Exception $e) {
            // Return generic error message for server issues
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to send message. Please try again later.'
            ], 500);
        }
    }
}
