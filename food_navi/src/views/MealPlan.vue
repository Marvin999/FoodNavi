<script setup>
  import { ref, watchEffect, onBeforeMount, onUpdated, onBeforeUpdate } from 'vue'
  import Meal from '../components/Meal.vue';
  import { fetchMeals } from '../../src/api/api.js'

  const cards = ref([]);


  watchEffect( async () => {
      cards.value = await fetchMeals()
      // console.log("watch fired!");
  })



  onBeforeUpdate( async () => {
    //  console.log("cards length:", await cards.value.length);
    
    cards.value = await fetchMeals()
  })

  onBeforeMount( async () => {
    // const recipe = await fetchCard(route.params.id)
    // localRecipe = recipe


    // name had to be this way to slow down dom load? otherwise nothing loads
    // recipeName.value = recipe.name
    // processInstructions()
    // processIngredients()
    // forceRerender()
  })


</script>

<template>
    <div class="mealplan">

      <div class="card_container">
        <Meal
          v-for="card, i in cards"
          :recipe="card"
          >

        </Meal>
        
      </div>
    </div>
  </template>
  
  <style scoped>

 
  
  .card_container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column: auto;
        gap: 20px;
    }

   


  </style>