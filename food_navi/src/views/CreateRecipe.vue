<!-- cant push to the just created id without crashing server. -->
<!-- cant use onUpdated to clear text box -->




<script setup>
import { ref, watchEffect, onBeforeMount, onBeforeUpdate, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
// import NewRecipe from '../components/NewRecipe.vue';
import { fetchCards, createCard, fetchCard, updateCard } from '../../src/api/api.js'

const cards = ref([])

let pageTitle = ref('')


const route = useRoute()
const router = useRouter()

let favorite = ref(false)
let mealPlanSelected = ref(false)

let recipeName = ref('')
let recipePicture = ref('')
let recipeRating = ref(null)

let servingsize = ref(null)
let calories = ref(null)
let totalCarbs = ref(null)
let dietaryFiber = ref(null)
let sugars = ref(null)
let protein = ref(null)
let sodium = ref(null)
let cholesterol = ref(null)
let fats = ref(null)
let ingredients = ref('')
let instructions = ref('')



onBeforeMount( async () => {
  console.log("testing create after update");
  // if params.id exists
  if (route.params.id) {
    // then fetch card and prefill input boxes
    const recipe = await fetchCard(route.params.id)

    recipeName.value = recipe.name
    recipePicture.value = recipe.picture
    recipeRating.value = recipe.rating
    // also chancge h1 title of view
    pageTitle.value = 'Update Recipe'
  
    favorite.value = recipe.favorite
    mealPlanSelected.value = recipe.mealPlanSelected

    servingsize.value = recipe.servingsize
    calories.value = recipe.calories
    totalCarbs.value = recipe.totalCarbs
    dietaryFiber.value = recipe.dietaryFiber
    sugars.value = recipe.sugars
    protein.value = recipe.protein
    sodium.value = recipe.sodium
    cholesterol.value = recipe.cholesterol
    fats.value = recipe.fats
    ingredients.value = recipe.ingredients
    instructions.value = recipe.instructions
  // console.log("update: this is the recipe id: ", recipe);
  }
    
})

const checkInputFields = () => {
  if (!recipeRating.value) {
    recipeRating.value = 0
  }
  if (!servingsize.value) {
    servingsize.value = 0
  }
  if (!calories.value) {
    calories.value = 0
  }
  if (!totalCarbs.value) {
    totalCarbs.value = 0
  }
  if (!dietaryFiber.value) {
    dietaryFiber.value = 0
  }
  if (!sugars.value) {
    sugars.value = 0
  }
  if (!protein.value) {
    protein.value = 0
  }
  if (!sodium.value) {
    sodium.value = 0
  }
  if (!cholesterol.value) {
    cholesterol.value = 0
  }
  if (!fats.value) {
    fats.value = 0
  }
}



const saveRecipe = async () => {
  const obj = {}
  checkInputFields()

  obj.favorite = favorite.value
  obj.mealPlanSelected = mealPlanSelected.value

  obj.name = recipeName.value
  obj.picture = recipePicture.value
  obj.rating = recipeRating.value
  obj.servingsize = servingsize.value
  obj.calories = calories.value
  obj.totalCarbs = totalCarbs.value
  obj.dietaryFiber = dietaryFiber.value
  obj.sugars = sugars.value
  obj.protein = protein.value
  obj.sodium = sodium.value
  obj.cholesterol = cholesterol.value
  obj.fats = fats.value
  obj.ingredients = ingredients.value
  obj.instructions = instructions.value
  
  if (route.params.id) {
    updateCard(obj, route.params.id)
  } else {
    createCard(obj)
  }
  // router.push(`/recipes/${route.params.id}`)
  router.push(`/`)
}

const cancelUpdate = () => {
  if(route.params.id){
    router.push(`/recipes/${route.params.id}`)
  } else {
    router.push(`/`)
  }
  
}

watchEffect(async () => {
    cards.value = await fetchCards()
})



</script>


<template>
  <h1>{{ pageTitle }}</h1>
  <div class="create_recipes">

    <div class="field_identifiers">
      <div>Name: </div>
      <div>PictureURL: </div>
      <div>Rating: </div>
      <div>Serving Size: </div>
      <div>Calories: </div>
      <div>Carbohydrates: </div>
      <div>Dietary Fiber: </div>
      <div>Sugar: </div>
      <div>Protein: </div>
      <div>Sodium: </div>
      <div>Cholesterol: </div>
      <div>Fats: </div>
    </div>

    <div class="input_fields">
      <div class="input_field">
        <input  type="text" v-model="recipeName" placeholder="name">
      </div>
      <div class="input_field">
        <input  type="text" v-model="recipePicture" placeholder="Picture URL">
      </div>
      <div class="input_field">
        <input  type="number" v-model="recipeRating" placeholder="Rating 1-5">
      </div>
      
      <div class="input_field">
        <input  type="number" v-model="servingsize" placeholder="Serving size">
      </div>
      <div class="input_field">
        <input  type="number" v-model="calories" placeholder="Calories">
      </div>
      <div class="input_field">
        <input  type="number" v-model="totalCarbs" placeholder="Carbohydrates">
      </div>
      <div class="input_field">
        <input  type="number" v-model="dietaryFiber" placeholder="Dietary Fiber">
      </div>
      <div class="input_field">
        <input  type="number" v-model="sugars" placeholder="Sugar">
      </div>
      <div class="input_field">
        <input  type="number" v-model="protein" placeholder="Protein">
      </div>
      <div class="input_field">
        <input  type="number" v-model="sodium" placeholder="Sodium">
      </div>
      <div class="input_field">
        <input  type="number" v-model="cholesterol" placeholder="Cholesterol">
      </div>
      <div class="input_field">
        <input  type="number" v-model="fats" placeholder="Fats">
      </div>
      <div class="input_field">
        <!-- <input  type="text" v-model="ingredients" placeholder="Ingredients"> -->
        <p>Ingredients:</p>
        <textarea name="Ingredients" id="ingredients" v-model="ingredients" placeholder="ingredients: amount" cols="50" rows="10"></textarea>
      </div>
      <div class="input_field">
        <!-- <input  type="text" v-model="instructions" placeholder="Instructions"> -->
        <p>Instructions:</p>
        <textarea name="Instructions" id="instructions" v-model="instructions" placeholder="step#: descriptive paragraph ending with." cols="50" rows="10"></textarea>
      </div>
    </div>
    
    
    <div>
      <div id="img_sample_container">
        <img id="img_sample" v-bind:src=recipePicture alt="">
        
      </div>
      <span>Picture Demo</span>
    </div>
    
    

  </div>
  <div class="create_update_buttons">
    <button @click="saveRecipe">Save</button>
    <button @click="cancelUpdate">Cancel</button>
  </div>
  

</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h1 {
  text-align: center;
  margin-bottom: 4%;
}

.create_recipes {
  display: flex;
  flex-direction: row;

}

.field_identifiers {
  flex: 1;
  text-align: right;
  padding-left: 10%;
  padding-right: 1%;
}

.input_fields {
  flex: 2;
  text-align: left;
}

.input_field > input {
  width: 60%;
}

.create_recipe {
  border: 1px solid black;

  /* display: block; */
}

#img_sample_container {
  flex: 3;
  height: 150px;
  max-width: 289px;
  max-height: 250px;
  text-align: left;
}


#img_sample {
  height: 150px;
  width: 285px;
  object-fit: cover;
  margin-left: -36%

}

.create_update_buttons {
  text-align: center;
}

.create_update_buttons > button {
  margin-left: 5px;
  margin-right: 5px;
}
</style>