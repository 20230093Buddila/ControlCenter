import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    starttime : {
        type: String,
        required: true,
    },
    endtime : {
        type: String,
        required: false,
    },
    escalatedPerson : {
        type: String,
        required: false,
    },
    remarks : {
        type: String,
        required: false,
    },
},
{
    timestamps: true, //createdAt, updatedAt
}
);

const Product = mongoose.model('Product', productSchema);
// products is the name of the collection in the database

export default Product;