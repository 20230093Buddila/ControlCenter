import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error){
        console.log("Error in Fetching Products", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
} 

export const createProduct = async (req,res) => {
        const product = req.body; //user will send this data

        if(!product.category || !product.description || !product.starttime){
            return res.status(400).json({message: "Please enter all fields"});
        }
    
        const newProduct = new Product(product);
    
        try{
            await newProduct.save();
            res.status(201).json({success: true, data: newProduct});
        } catch (error){
            console.error("Error in Create Product", error.message);
            res.status(500).json({success: false, message: "Server Error"});
        }
    
};

export const deleteProduct = async (req,res) => {
    
        const {id} = req.params;
        const product = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({success: false, message: "Invalid Product Id"});
        }
    
        try{
            await Product.findByIdAndDelete(id);
            res.status(200).json({success: true, message: "Product Deleted"});
        } catch (err){
            console.error("Error in Delete Product", error.message);
            res.status(500).json({success: false, message: "Server Error"});
        }
    
};

export const updateProduct = async (req,res) => {
    
        const {id} = req.params;
        const product = req.body;
    
    
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No product with id: ${id}`);
        }
    
        try{
            const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
            res.status(200).json({success: true, data: updatedProduct});
        } catch (error){
            res.status(500).json({success: false, message: "Server Error"});
        }
    
};