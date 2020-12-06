<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ExcelImport;
use App\Exports\ExcelExport;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Schema;
use DB;

class Inventario extends Controller
{

  function Ver(Request $request){
    $file = $request->file('Archivo');
    $name=$file->getClientOriginalName();
    $file->storeAs('archivo/',$name);
    $data = Excel::toArray(null,"archivo/".$name);

    $id = DB::table('tablas_id')->insertGetId(array('Nombre_Tabla' => $name));

    Schema::create($id, function($table) use ($data){

      foreach ($data[0][1] as $value) {

        $table->string($value)->default(" ")->nullable();

      }
      $table->increments('id');
    });
    $insert = array();
    foreach ($data[0] as $key => $value) {
      $insert=array();
      if($key!=0 && $key!=1){
        foreach ($value as $key2 => $value2) {
          $insert[$data[0][1][$key2]]=$value2;
        }

        DB::table($id)->insert($insert);
      }
    }

    return json_encode("OK");
  }

  function gettablas(){

    $query=DB::table('tablas_id')->get();
    return $query;

  }


  function comparar(Request $request){

    $query=DB::table($request->input('id1'))->get();
    $query2=DB::table($request->input('id2'))->get();
    $count=0;
    $out=array();
    $newData=array();
    foreach ($query as $key => $value) {


      $query3=DB::table($request->input('id2'))->where('Código',$value->Código)->where('Stock en Bodega','<>',$value->{'Stock en Bodega'})->get();

      if(isset($query3[0])){

        $newData=["Código"=>$value->Código,"Nombre"=>$query3[0]->Descripción,"Stock Tabla 1"=>$value->{'Stock en Bodega'},"Stock Tabla 2"=>$query3[0]->{'Stock en Bodega'}];

        array_push($out,$newData);
      }



    }


    return $out;

  }


  function verTabla(Request $request){

    $query=DB::table($request->input('id'))->get();
    return $query;
  }

  function ChangeData(Request $request){

    $data=$request->input('data');
    $tabla_id=$request->input('id');
    foreach ($data as $key => $value) {
      if($value!=null){
        DB::table($tabla_id)->where('id', $key)->update($value);
      }
    }
    return "PASO";

  }

  function Descargar(Request $request){

    $id=$request->input("id");
    $nombre=DB::table("tablas_id")->where('t_id',$id)->select("Nombre_Tabla")->get();
    $datos=DB::table($id)->get()->toArray();


    Excel::Store(new ExcelExport($datos), $nombre[0]->Nombre_Tabla,'public');

    return json_encode($nombre[0]->Nombre_Tabla);



  }

}
