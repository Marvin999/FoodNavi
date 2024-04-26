
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://marvin:supercia12@cluster0.svhcftc.mongodb.net/FoodNavi?retryWrites=true&w=majority');

export const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ingredient must be given a name"]
    },
    fats: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    picture: {
        type: String
    },
    servingsize: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    calories: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    totalCarbs: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    dietaryFiber: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    sugars: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    protein: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    sodium: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    },
    cholesterol: {
        type: Number,
        min: [0, 'Amount cannot be negative']
    }
});


