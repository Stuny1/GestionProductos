<?php

namespace App\Imports;

use App\User;
use Maatwebsite\Excel\Concerns\ToModel;

class ExcelImport implements ToModel
{
  /**
  * @param array $row
  *
  * @return Excel|null
  */
 public function model(array $row)
 {
     return new Excel([
        'name'     => $row[1],

     ]);
 }
}
