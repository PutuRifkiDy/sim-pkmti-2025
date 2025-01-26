<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ValidProposalScheme implements ValidationRule
{
    public $validSchemes = ['PKM-GFT', 'PKM-K', 'PKM-KC', 'PKM-PI', 'PKM-PM'];

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $isValidScheme = false;
        foreach ($this->validSchemes as $validScheme) {
            if ($validScheme == $value) {
                $isValidScheme = true;
                break;
            }
        }

        if (!$isValidScheme) $fail('Mohon pilih skema PKM yang valid');
    }
}
