<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class BookController extends Controller
{
    //

    public function index(){
        $books = Books::all();
        return response()->json($books);
    }

    public function create(Request $request){
        $books = new Books;
        $books->name = $request->name;
        $books->detail = $request->detail;
        $books->save();
        return response()->json(["message"=>"Book Added"],201);
    }


    public function show ($id)
    {
        $book = Books::find($id);
        if(!empty($book)){
            return response() ->json($book);
        }else {
            return response()->json([
                "message"=>"Book not found"
            ],400);
        }
    }

    public function destroy($id)
    {
        $book = Books::findOrFail($id);
        $book->delete();
        return response()->json(["message"=>"Book Deleted"],201);
    }

    public function edit(Request $request,$id)
    {
        $book = Books::find($id);
        if(!empty($book)){
            $book->name = $request->name;
            $book->detail = $request->detail;
            $book ->save();
            return response()->json(["message"=>"Book edited"],201);
        }else {
            return response()->json([
                "message"=>"Book not found"
            ],400);
        }
    }
}
