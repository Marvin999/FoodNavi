<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchCard, deleteCard, updateCard, deleteMeal } from '../../src/api/api.js'

const router = useRouter();
const route = useRoute();

let ingredientList = ref([])
let ingredientListTemp = []
let instructionList = ref([])
let instructionListTemp = []

const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
})


onBeforeMount( async () => {
    // do a fetch on each meal.recipeID
    //  check if favorite
    //  change meal.favorite to true



    if (props.recipe.ingredients.includes('\n')) {
        ingredientList = props.recipe.ingredients.split('\n')
        // console.log("new line found, !", ingredientList);
    } else {
        ingredientListTemp.push(props.recipe.ingredients)
        ingredientList = ingredientListTemp
        // console.log("new line NOT found, #", ingredientList);
    }
    
    // instructionList = stringToArray(props.recipe.instructions)
    if (props.recipe.instructions.includes('\n')) {
        instructionList = props.recipe.instructions.split('\n')
    } else {
        instructionListTemp.push(props.recipe.instructions)
        instructionList = instructionListTemp
    }
    
})


const logFunction = () => {
    console.log(props.recipe._id);

}

const openRecipe = () => {
  // console.log("OpenRecipe", id.value);
  router.push(`recipes/${props.recipe.recipeID}`)
}

const deleteRecipe = async () => {

// !!!! does this need to be await?
    deleteMeal(props.recipe._id)
    // props.mealRemoved = true
}

</script>

<template>

    <div id="mealCard">
        <div class="cardHeader">
            <div id="card_rating">
                <div id="heart">
                    <img class="ratestar" v-if="props.recipe.favorite" src="../assets/icons8-favorite-48.png" alt="">
                    <img class="ratestar" v-else="props.recipe.favorite" src="../assets/icons8-favorite-50.png" alt="">
                </div>
                <div id="star">
                    <img class="ratestar" src="../assets/star.png" alt="">
                </div>
                <div id="ratingNumber">
                    {{ props.recipe.rating }}
                </div>
                <div id="buttonContainer">
                    <button @click="deleteRecipe">Remove</button>
                </div>
                

            </div>
        </div>
        <div @click="openRecipe" class="flexPanelContainer">
            <div class="imgContainer">
                <img class="recipePicture" :src="props.recipe.picture" alt="">
            </div>
            <div class="ingredientContainer">
                <h2>{{ props.recipe.name }}</h2>
                <h3>Ingredients:</h3>
                <div class="mpIngredients" v-for="ingredient in ingredientList">
                    {{ ingredient }} 
                    <br>
                </div>
            </div>
            <div class="nutritionContainer">
                <h2>Nutrition:</h2>
                <div class="nutritionEntries">
                    <p>Serving Size: {{ props.recipe.servingsize }} </p>
                    <p>Calories: {{ props.recipe.calories }} </p>
                    <p>Carbohydrates: {{ props.recipe.totalCarbs }}g</p>
                    <p>Protein: {{ props.recipe.protein }}g</p>
                    <p>Fats: {{ props.recipe.fats }}g</p>
                    <p>sugars: {{ props.recipe.sugars }}g</p>
                    <p>Fiber: {{ props.recipe.dietaryFiber }}g</p>
                    <p>Sodium: {{ props.recipe.sodium }}g</p>
                    <p>Cholesterol: {{ props.recipe.cholesterol }}g</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

#mealCard {
    border-bottom: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
}

#card_rating {
    display: flex;
}

#heart {
    flex: 1;
    max-width: 45px;
    text-align: center;
    margin-top: 7px;
}

#star {
    flex: 2;
    max-width: 45px;
    text-align: center;
    margin-top: 7px;
}

#ratingNumber {
    flex: 3;
    margin-top: 14px;
    max-width: 40px;
    text-align: center;
    margin-left: -43px;
}

#buttonContainer {
    flex: 4;
    text-align: right;
    margin-top: 5px;
}

.ratestar {
  height: 35px;
  width: 35px;
  margin-top: 2%;
  /* margin-bottom: -24.5%; */
  /* margin-right: -2.85%; */
  /* margin-left: -13%; */
}

.flexPanelContainer {
    display: flex;
    height: 210px;
    margin-top: -6px;
    overflow-y: hidden;
}

.imgContainer {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
  height: auto;
  max-width: 300px;
  max-height: 200px;
}

.recipePicture {
  height: 200px;
  width: 300px;
  max-height: 200px;
  max-width: 300px;
  object-fit: cover;
  /* z-index: -1; */
}

.ingredientContainer {
    height: 205px;
    width: 700px;
    margin-right: 10px;
}


.nutritionContainer {
    margin-left: 10px;
}

</style>

