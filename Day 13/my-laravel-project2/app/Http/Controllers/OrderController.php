<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrderController extends Controller
{
    // create API--> orders
    public function index(){
        $orders = Orders::all();
        return response()->json($orders);
    }


    public function create(Request $request){
        $orders = new Orders;
        $orders->type = $request->type;
        $orders->price = $request->price;
        $orders->save();
        return response()->json(["message"=>"Order Added"],201);
    }

    public function show ($id)
    {
        $order = Orders::find($id);
        if(!empty($order)){
            return response() ->json($order);
        }else {
            return response()->json([
                "message"=>"Order not found"
            ],400);
        }
    }

    public function destroy($id)
    {
        $order = Orders::findOrFail($id);
        $order->delete();
        return response()->json(["message"=>"Order Deleted"],201);
    }

    public function edit(Request $request,$id)
    {
        $order = Orders::find($id);
        if(!empty($order)){
            $order->type = $request->type;
            $order->price = $request->price;
            $order ->save();
            return response()->json(["message"=>"Order edited"],201);
        }else {
            return response()->json([
                "message"=>"Order not found"
            ],400);
        }
    }


}
