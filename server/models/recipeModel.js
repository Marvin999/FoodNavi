import mongoose from 'mongoose';

import {recipeSchema} from './schema.js'

import { v4 as uuidv4 } from 'uuid';

const Recipe = mongoose.model('Recipe', recipeSchema)

// crrud

// GET all recipe
export const getAll = async () => {

    return await Recipe.find()
}


// GET 1 recipe by id
export const getByID = async(id) => {
    let returnCard = null;
    returnCard = await Recipe.findOne({_id: id})
    return returnCard       
}


// DELETE 1 recipe by id
export const deleteByID = async(id) => {
    // await Recipe.deleteOne({_id: id})
    // return
    let returnCard = null
    returnCard = await Recipe.deleteOne({_id: id})
    return returnCard
}


// CREATE 1 Recipe
export const create = async (data) => {
    data.id = uuidv4();

    const newRecipe = new Recipe({
        name: data.name,
        favorite: data.favorite,
        mealPlanSelected: data.mealPlanSelected,
        fats: data.fats,
        picture: data.picture,
        servingsize: data.servingsize,
        calories: data.calories,
        totalCarbs: data.totalCarbs,
        dietaryFiber: data.dietaryFiber,
        sugars: data.sugars,
        protein: data.protein,
        sodium: data.sodium,
        cholesterol: data.cholesterol,
        rating: data.rating,
        ingredients: data.ingredients,
        instructions: data.instructions,
        recipeID: data.recipeID
    });

    const returnData = await newRecipe.save()
    return returnData
    // console.log(returnData);
}

export const update = async (data, id) => {

    const updateRecipe = Recipe.findOneAndUpdate(
        {_id: id},
        {
        name: data.name,
        favorite: data.favorite,
        mealPlanSelected: data.mealPlanSelected,
        fats: data.fats,
        picture: data.picture,
        servingsize: data.servingsize,
        calories: data.calories,
        totalCarbs: data.totalCarbs,
        dietaryFiber: data.dietaryFiber,
        sugars: data.sugars,
        protein: data.protein,
        sodium: data.sodium,
        cholesterol: data.cholesterol,
        rating: data.rating,
        ingredients: data.ingredients,
        instructions: data.instructions,
        recipeID: data.recipeID
    });

    const returnData = await updateRecipe
    return returnData
}