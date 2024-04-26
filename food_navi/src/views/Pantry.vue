<script setup>
import { onBeforeUpdate, ref, watchEffect } from 'vue'
import Ingredient from '../components/Ingredient.vue';
import IngredientCreate from '../components/IngredientCreate.vue';
import { fetchIngredients } from '../../src/api/api.js'

let cards = ref([]);

watchEffect(async () => {
    cards.value = await fetchIngredients()
})

onBeforeUpdate(async() => {
    cards.value = await fetchIngredients()
})

</script>

<template>
    <div>
        
        <div class="createCard">
            <IngredientCreate></IngredientCreate>

        </div>
        <div class="ingredientCard">
            <Ingredient
                v-for="card in cards"
                :id="card._id"
                :title="card.name"
                :picture="card.picture"
                :servingsize="card.servingsize"
                >
            </Ingredient>
        </div>
    </div>
  </template>
  
<style scoped>


.createCard {
    margin-bottom: 50px;
}

.ingredientCard {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column: auto;
    gap: 5px;
}
    

</style>