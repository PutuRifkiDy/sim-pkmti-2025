<?php
namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        $end_date_sharing_session_event = date('Y-m-d H:i:s', strtotime('2025-08-23 15:59:00'));
        $start_date_coaching_PKM        = date('Y-m-d H:i:s', strtotime('2025-08-23 16:00:00'));

        $timeline_events = [
            [
                'title' => 'Pembukaan dan Sharing Session Pelatihan PKM-TI 2025',
                'date'  => $end_date_sharing_session_event,
            ],
            [
                'title' => 'Pendaftaran Pelatihan PKM-TI 2025',
                'date'  => $start_date_coaching_PKM,
            ],
        ];

        $date_sharing_session = null;
        $date_coaching_pkm    = null;

        if (Carbon::now() < Carbon::parse($end_date_sharing_session_event)) {
            $date_sharing_session = $timeline_events[0];
        } elseif (
            Carbon::now() > Carbon::parse($end_date_sharing_session_event)
            &&
            Carbon::now() < Carbon::parse($start_date_coaching_PKM)
        ) {
            $date_coaching_pkm = $timeline_events[1];
        }

        return Inertia::render('Dashboard', compact('date_sharing_session', 'date_coaching_pkm'));
    }
}
