import * as mealModel from '../models/mealModel.js'

export const getAll = async () => {
    return await mealModel.getAll()
}

export const getByID = async (id) => {
    return await mealModel.getByID(id)
}

export const deleteByID = async (id) => {

    return await mealModel.deleteByID(id)
}

export const create = async (data) => {
    return await mealModel.create(data)
}

export const updateByID = async (data, id) => {
    return await mealModel.update(data, id)
}