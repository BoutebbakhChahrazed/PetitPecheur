<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     * Optional if table name follows convention (reservations).
     *
     * @var string
     */
    protected $table = 'reservations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'date',
        'time',
        'guests',
        'message',
        'status', // Optional: to track 'pending', 'confirmed', 'cancelled'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date' => 'date:Y-m-d',
        'guests' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Accessor to get the date in a human-readable format (e.g., "Dec 25, 2025").
     */
    public function getFormattedDateAttribute()
    {
        return $this->date->format('M d, Y');
    }

    /**
     * Scope a query to only include upcoming reservations.
     */
    public function scopeUpcoming($query)
    {
        return $query->where('date', '>=', now()->toDateString())
                     ->orderBy('date', 'asc')
                     ->orderBy('time', 'asc');
    }
}
