<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::POST("Ver", "Inventario@Ver");
Route::POST("GetTabla", "Inventario@gettablas");
Route::POST("comparar", "Inventario@Comparar");
Route::POST("verTabla", "Inventario@verTabla");
Route::POST("ChangeData", "Inventario@ChangeData");
Route::POST("Descargar", "Inventario@Descargar");
