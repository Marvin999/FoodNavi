import mongoose from 'mongoose';

import {ingredientSchema} from './ingredientSchema.js'

const Ingredient = mongoose.model('ingredient', ingredientSchema)

// crrud

// GET all Ingredient
export const getAll = async () => {

    return await Ingredient.find()
}


// GET 1 Ingredient by id
export const getByID = async(id) => {
    let returnCard = null;
    returnCard = await Ingredient.findOne({_id: id})
    return returnCard       
}


// DELETE 1 Ingredient by id
export const deleteByID = async(id) => {
    let returnCard = null
    returnCard = await Ingredient.deleteOne({_id: id})
    return returnCard
}


// CREATE 1 Ingredient
export const create = async (data) => {

    const newIngredient = new Ingredient({
        name: data.name,
        fats: data.fats,
        picture: data.picture,
        servingsize: data.servingsize,
        calories: data.calories,
        totalCarbs: data.totalCarbs,
        dietaryFiber: data.dietaryFiber,
        sugars: data.sugars,
        protein: data.protein,
        sodium: data.sodium,
        cholesterol: data.cholesterol
    });


    const returnData = await newIngredient.save()
    return returnData
    // console.log(returnData);
}

export const update = async (data, id) => {

    const updateIngredient = Ingredient.findOneAndUpdate(
        {_id: id},
        {
        name: data.name,
        fats: data.fats,
        picture: data.picture,
        servingsize: data.servingsize,
        calories: data.calories,
        totalCarbs: data.totalCarbs,
        dietaryFiber: data.dietaryFiber,
        sugars: data.sugars,
        protein: data.protein,
        sodium: data.sodium,
        cholesterol: data.cholesterol
    });

    const returnData = await updateIngredient
    return returnData
}