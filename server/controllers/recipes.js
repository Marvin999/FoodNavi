import { response } from "express";
import * as recipeService from '../services/recipeService.js'


export const handleGetRecipes = async (request, response) => {
    const data = await recipeService.getAll()
    response.status(200).json(data);
}

export const handleGetRecipe = async (request, response) => {
    const id = request.params.id;
    const returnCard = await recipeService.getByID(id);
    // response.status(200).send(`getting ${id} recipe`);
    if (returnCard) {
        response.status(200).json(returnCard)
        return
    } 
    response.status(404).send({failed: "Recipe not found"})
    
}

export const handleCreateRecipe = async (request,response) => {

    let newRecipeBody = null
    // find out how to not crash when name validation failes
    if(request.body.name == "") {
        response.status(400).send({required: "Recipe Name required!"})
        return
    }
    // console.log("this is the created recipe body: ", request.body);
    newRecipeBody = await recipeService.create(request.body)
    if (newRecipeBody) {
        response.status(201).json(request.body);
        return
    }

    response.status(422).send({failed: "Failed to save Recipe"});
}

export const handleDeleteRecipe = async (request, response) => {
    console.log("deleting recipe");

    const id = request.params.id;
    const returnCard = await recipeService.deleteByID(id);
    // response.status(200).send(`getting ${id} recipe`);
    // console.log("return card ###############",returnCard);
    if (returnCard) {
        // console.log("got here");
        response.status(204);
        return
    }
    
    response.status(404).send({failed: "Recipe not found"})
}

export const handleUpdateRecipe = async (request, response) => {
    console.log("*updating Recipe!")
    // console.log("this is the updated recipe body: ", request.body);
    const returnCard = await recipeService.updateByID(request.body, request.params.id)
    if (returnCard) {
        response.status(200).send( {success: "updated Recipe"})
        return
    }

    response.status(422).send({failed: "Failed to Update Recipe"})

}


