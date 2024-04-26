import { response } from "express";
import * as ingredientService from '../services/ingredientService.js'


export const handleGetIngredients = async (request, response) => {
    const data = await ingredientService.getAll()
    response.status(200).json(data);
}

export const handleGetIngredient = async (request, response) => {
    const id = request.params.id;
    const returnCard = await ingredientService.getByID(id);
    if (returnCard) {
        response.status(200).json(returnCard)
        return
    } 
    response.status(404).send({failed: "ingredient not found"})
    
}

export const handleCreateIngredient = async (request,response) => {

    let newIngredientBody = null
    // find out how to not crash when name validation failes
    if(request.body.name == "") {
        response.status(400).send({required: "ingredient Name required!"})
        return
    }
    newIngredientBody = await ingredientService.create(request.body)
    if (newIngredientBody) {
        response.status(201).json(request.body);
        return
    }

    response.status(422).send({failed: "Failed to save Ingredient"});
}

export const handleDeleteIngredient = async (request, response) => {
    console.log("deleting Ingredient");

    const id = request.params.id;
    const returnCard = await ingredientService.deleteByID(id);
    if (returnCard) {
        // console.log("got here");
        response.status(204);
        return
    }
    
    response.status(404).send({failed: "Ingredient not found"})
}

export const handleUpdateIngredient = async (request, response) => {
    console.log("*updating Ingredient!")
    const returnCard = await ingredientService.updateByID(request.body, request.params.id)
    if (returnCard) {
        response.status(200).send( {success: "updated Ingredient"})
        return
    }

    response.status(422).send({failed: "Failed to Update Ingredient"})

}


