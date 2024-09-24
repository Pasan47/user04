<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products = Product::latest()->paginate(5);
        return view('products.index',compact('products'))
            ->with(request()->input('page'));  // to call onejct instead of dot operator here we use -> 
    }

    public function create(){
        return view('products.create');
    }

    public function store(Request $request)
    {
        //validate the input
        $request->validate([
            'name' => 'required',
            'detail'=> 'required'
        ]);

        //create a new product in database
        Product::create($request ->all());

        // redirect the usere and send friendly message
        return redirect()->route('products.index')->with('succes','product created successfully');
    }

    public function edit(Product $product)
    {
        return view('products.edit',compact('product'));
    }

    //update funtion (request-->new details, product--> get the current details)
    public function update(Request $request, Product $product){
        $request->validate([
            'name' => 'required',
            'detail'=> 'required'
        ]);

        Product::update($request ->all());

        // redirect the usere and send friendly message
        return redirect()->route('products.index')->with('succes','product created successfully');
    
    }

    //delete funtion

    public function destroy(Product $product){
        $product->delete();
        return redirect()->route('product.index')->with('succes','product created successfully');
    }


}
