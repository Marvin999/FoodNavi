<script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';
import { onBeforeMount,  ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
// import NewRecipe from '../components/NewRecipe.vue';
import { fetchCard, deleteCard, updateCard, createMeal } from '../../src/api/api.js'

const router = useRouter();
const route = useRoute();

// using a localrecipe as a store to reduce code lines
let localRecipe = ref({})

const blackHeartOutline = "https://as2.ftcdn.net/jpg/01/25/83/03/220_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
const redHeartFilled = "https://img.freepik.com/premium-vector/vector-illustration-heart-symbol-red-color-isolated-white-background_842925-86.jpg"

const imgSrc = ref(blackHeartOutline)
let recipeInstructionsList = ref([])
let recipeIngredientsList = ref([])

let recipeName = ref("")
let confirmDeleteFlag = ref(false)
let confirmAddedFlag = ref(false)



const processInstructions = () => {
  recipeInstructionsList = localRecipe.instructions.split('\n');
}

const processIngredients = () => {
  recipeIngredientsList = localRecipe.ingredients.split('\n');
}

const logData = () => {
  console.log("test of my new method", recipeInstructionsList);
}

const forceRerender = () => {
  // imgSrc.value = heartImg;

  if (localRecipe.favorite) {
    imgSrc.value = redHeartFilled

  } else {
    imgSrc.value = blackHeartOutline
  }
  
};

onBeforeMount( async () => {
  const recipe = await fetchCard(route.params.id)
  localRecipe = recipe


  // name had to be this way to slow down dom load? otherwise nothing loads
  recipeName.value = recipe.name
  processInstructions()
  processIngredients()
  forceRerender()
})

const updateRecipe = () => {
  // !!!! does this need to be async?
  router.push(`/recipes/${route.params.id}/update`)
}

const deleteRecipe = async () => {

  // !!!! does this need to be await?
  deleteCard(route.params.id)
  router.push(`/`)
}

const toggleConfirmAdded = () => {
  console.log(confirmAddedFlag.value);
  if(!confirmAddedFlag.value) {
    confirmAddedFlag.value = true
    console.log(confirmAddedFlag.value);
  } else {
    confirmAddedFlag.value = false
  }
}

const AddToMealPlan = async () => {
  let obj = {}
  localRecipe.mealPlanSelected = true
  obj = localRecipe
  obj.recipeID = localRecipe._id
  // console.log("testing new meal and id", obj.value);
  createMeal(obj)
  toggleConfirmAdded()
  setTimeout(toggleConfirmAdded, 1000)
}


const toggleFavorite = async () => {

  const obj = {}
  // console.log("before update:", localRecipe.favorite);
  
  if (localRecipe.favorite) {
    obj.favorite = false
    localRecipe.favorite = false

  } else {
    obj.favorite = true
    localRecipe.favorite = true
  }
  await updateCard(obj, route.params.id)
  forceRerender()
  
}

const confirmDelete = () => {
  confirmDeleteFlag.value = true
  // console.log("confirmDelete: ", confirmDeleteFlag);
}

const confirmCancel = () => {
  confirmDeleteFlag.value = false
  // console.log("confirmCancel: ", confirmDeleteFlag);
}


</script>

<template>
  <div class="show_recipe">
    <h1 id="recipeTitle">{{ recipeName }}</h1>

  <div class="AddMeal">
    <span v-if="confirmAddedFlag" class="confirmAdded">Meal Added!</span>
    <button @click="AddToMealPlan">Add to Meal Plan</button>
  </div>

  <div class="panelContainer">
    <div class="leftPanel">

      <div id="card_rating">
        <div id="heart">
          <img @click="toggleFavorite" class="ratestar favHeart" :src="imgSrc" alt="">
        </div>
        <div id="star">
          <img class="ratestar" src="../assets/star.png" alt="">
          <span>{{ localRecipe.rating }}</span>
        </div>
      </div>

      <div id="recipePictureContainer">
        <img id="recipePicture" v-bind:src= localRecipe.picture alt=""/>
      </div>
    </div>
    <div class="midPandel">
      <h1>Ingredients</h1>
      <div>
        <p v-for="ingredient, i in recipeIngredientsList">
          {{ ingredient }}
          <br>
        </p>
      </div>
    </div>
    <div class="rightPanel">
      <h1>Nutrition</h1>
      <p>Serving Size: {{ localRecipe.servingsize }} </p>
      <p>Calories: {{ localRecipe.calories }} </p>
      <p>Carbohydrates: {{ localRecipe.totalCarbs }}g</p>
      <p>Protein: {{ localRecipe.protein }}g</p>
      <p>Fats: {{ localRecipe.fats }}g</p>
      <p>sugars: {{ localRecipe.sugars }}g</p>
      <p>Fiber: {{ localRecipe.dietaryFiber }}g</p>
      <p>Sodium: {{ localRecipe.sodium }}g</p>
      <p>Cholesterol: {{ localRecipe.cholesterol }}g</p>

    </div>
  </div>
  <div class="instructionsPanel">
    <h1>Instructions</h1>
    <div class="instructionSteps">
      <p v-for="instruction, i in recipeInstructionsList">
        {{ instruction }} 
        <br>
      </p>
    </div>
  </div>

  <div v-if="!confirmDeleteFlag" class="buttonsContainer">
    <button class="update_deleteButtons" @:click = "updateRecipe">Update</button>
    <button class="update_deleteButtons" @:click = "confirmDelete">Delete</button>
  </div>

  <div v-else class="buttonsContainer">
    <div class="confirmMessage">Confirm you want to delete Recipe!</div>
    <button class="update_deleteButtons" @:click="confirmCancel">Cancel</button>
    <button class="confirmDelete update_deleteButtons" @:click="deleteRecipe">Delete</button>
  </div>

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

.create_recipe {
  border: 1px solid black;
}

#recipeTitle {
  font-size: 300%;
  text-align: center;
  margin-bottom: 1em;
}

.AddMeal {
  margin-right: 5%;
  text-align: right;
  margin-bottom: -2.5%;
}

.panelContainer {
  display: flex;
}

.leftPanel {
  flex: 1;
  /* margin-top: 2.5%; */
  margin-left: 5%;
}

.midPandel {
  flex: 2;
  margin-top: 2em;
  margin-left: 2em;
}

.rightPanel {
  flex: 3;
  margin-top: 2em;
  max-width: 305px;
  padding-left: 25px;
}

#card_rating {
  display: flex;
  text-align: right;
  margin-bottom: 10px;
}

#heart {
  flex: 1;
  text-align: right;
  margin-top: -45px;
  margin-right: 10px;
  height: 30px;
  
}

#star {
  flex: 2;
  max-width: 50px;
}

#star > span {
  
  margin-left: -20px;
  margin-right: 15px;
  margin-bottom: 10px;
}

.ratestar {
  height: 35px;
  width: 35px;
  margin-top: 2%;
  margin-bottom: -24.5%;
  margin-right: -2.85%;
  margin-left: -13%;
}

.favHeart {
  margin-left: 25%;
}

.favHeart:hover {
  height: auto;
  width: 38px;
}

.confirmAdded {
  color: rgb(20, 169, 20);
  margin-right: 10px;
}

#recipePictureContainer {
  margin-top: 5px;
  height: auto;
  max-width: 320px;
  max-height: 400px;
}

#recipePicture {
  height: 255px;
  width: 320px;
  max-height: 400px;
  object-fit: cover;
  z-index: -1;
}

.instructionsPanel {
  margin-top: 20px;
  text-align: center;
  margin-bottom: 50px;
}

.instructionSteps {
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
}

.buttonsContainer {
  text-align: center;
}

.update_deleteButtons {
  margin-left: .5%;
  margin-right: .5%;

}

.confirmMessage {
  color: red;
}
</style>