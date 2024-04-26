import mongoose from 'mongoose';

import {mealSchema} from './mealSchema.js'

import { v4 as uuidv4 } from 'uuid';

const Meal = mongoose.model('meal', mealSchema)

// crrud

// GET all Meal
export const getAll = async () => {

    return await Meal.find()
}


// GET 1 Meal by id
export const getByID = async(id) => {
    let returnCard = null;
    returnCard = await Meal.findOne({_id: id})
    return returnCard       
}


// DELETE 1 Meal by id
export const deleteByID = async(id) => {
    let returnCard = null
    returnCard = await Meal.deleteOne({_id: id})
    return returnCard
}


// CREATE 1 Meal
export const create = async (data) => {

    const newMeal = new Meal({
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

    const returnData = await newMeal.save()
    return returnData
}

export const update = async (data, id) => {

    const updateMeal = Meal.findOneAndUpdate(
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

    const returnData = await updateMeal
    return returnData
}