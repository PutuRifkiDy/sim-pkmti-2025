<?php

namespace App\Jobs;

use App\Mail\SetupEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $args;

    /**
     * Create a new job instance.
     */
    public function __construct($args)
    {
        $this->args = $args;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->args['email'])->send(new SetupEmail($this->args));
    }
}
