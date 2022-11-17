<?php

namespace App\Http\Controllers;

use App\Custom\Response;
use App\Models\Product;
use Illuminate\Http\Request;
use Validator;

class ProductController extends Controller
{
    public function index()
    {
        return Response::json(true, 'Products', Product::orderBy('created_at', 'desc')->get());
    }

    public function show(product $product)
    {
        return Response::json(true, 'Product', $product);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'picture' => 'required|image',
        ]);

        if ($validator->fails()) {
            return Response::json(false, 'Validation Error.', $validator->errors()->first());
        }

        $product = new Product();
        $product->name = $request->name;
        if ($request->has('picture')) {
            $product->picture = UploadImage($request->file('picture'), 'products');
        }
        $product->save();

        return Response::json(true, 'Product created successfully.', $product);
    }
    public function delete(product $product)
    {
        if ($product->delete()) {
            return Response::json(true, 'Product deleted successfully.');
        }
        return Response::json(false, 'Product not deleted.');
    }

    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'picture' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return Response::json(false, 'Validation Error.', $validator->errors()->first());
        }

        if ($request->has('name')) {
            $product->name = $request->name;
        }
        if ($request->has('picture')) {
            $product->picture = UploadImage($request->file('picture'), 'products');
        }
        $product->save();

        return Response::json(true, 'Product updated successfully.', $product);
    }
}
