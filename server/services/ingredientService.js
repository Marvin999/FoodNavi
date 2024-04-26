import * as ingredientModel from '../models/ingredientModel.js'

export const getAll = async () => {
    return await ingredientModel.getAll()
}

export const getByID = async (id) => {
    return await ingredientModel.getByID(id)
}

export const deleteByID = async (id) => {

    return await ingredientModel.deleteByID(id)
}

export const create = async (data) => {
    return await ingredientModel.create(data)
}

export const updateByID = async (data, id) => {
    return await ingredientModel.update(data, id)
}