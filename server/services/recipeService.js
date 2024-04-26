import * as recipeModel from '../models/recipeModel.js'

export const getAll = async () => {
    return await recipeModel.getAll()
}

export const getByID = async (id) => {
    return await recipeModel.getByID(id)
}

export const deleteByID = async (id) => {

    return await recipeModel.deleteByID(id)
}

export const create = async (data) => {
    return await recipeModel.create(data)
}

export const updateByID = async (data, id) => {
    return await recipeModel.update(data, id)
}