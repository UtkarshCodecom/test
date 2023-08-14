const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "please enter product name"],
        trim: true
    },
    description:{
        type:String,
        required: [true, "please enter description"]
    },
    html:{
        type:String,
        required: [true, "please enter html"]
    },
    css:{
        type:String,
        required: [true, "please enter css"]
    },
    javascript:{
        type:String,
        required: [true, "please enter JS"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product", productSchema);