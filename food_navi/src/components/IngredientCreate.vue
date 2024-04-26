

<script setup>


import { onBeforeMount, ref } from 'vue';
import { createIngredient  } from '../../src/api/api.js'

import { toRefs } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

let recipeName = ref('')
let recipePicture = ref('')

let servingsize = ref(null)
let calories = ref(null)
let totalCarbs = ref(null)
let dietaryFiber = ref(null)
let sugars = ref(null)
let protein = ref(null)
let sodium = ref(null)
let cholesterol = ref(null)
let fats = ref(null)



const saveIngredient = async () => {
  const obj = {}
  checkInputFields()


  obj.name = recipeName.value
  obj.picture = recipePicture.value
  obj.servingsize = servingsize.value
  obj.calories = calories.value
  obj.totalCarbs = totalCarbs.value
  obj.dietaryFiber = dietaryFiber.value
  obj.sugars = sugars.value
  obj.protein = protein.value
  obj.sodium = sodium.value
  obj.cholesterol = cholesterol.value
  obj.fats = fats.value

  
  createIngredient(obj)
  clearInputFields()
  
}

const checkInputFields = () => {
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

const clearInputFields = () => {

  recipeName.value = ''
  recipePicture.value = ''

  servingsize.value = null
  calories.value = null
  totalCarbs.value = null
  dietaryFiber.value = null
  sugars.value = null
  protein.value = null
  sodium.value = null
  cholesterol.value = null
  fats.value = null
}



const props = defineProps({
})



</script>

<template>
    
    <div class="card">
      <h3>Add New Ingredient</h3>
      <div class="addNewIngredient">
        
        <!-- This is ingredient Create! -->
        <div class="inputLabels">
          <div>Name:</div>
          <div>Picture:</div>
          <div>Serving Size:</div>
          <!-- <div>Calories:</div>
          <div>Carbohydrates:</div>
          <div>Dietary Fiber:</div>
          <div>Sugar:</div>
          <div>Protein:</div>
          <div>Sodium:</div>
          <div>Cholesterol:</div>
          <div>Fats:</div> -->
        </div>
        <div class="inputFields">
          <input  type="text" v-model="recipeName" placeholder="name">
          <input  type="text" v-model="recipePicture" placeholder="ImgURL">
          <input  type="number" v-model="servingsize" placeholder="amount">
          <!-- <input  type="number" v-model="calories" placeholder="Calories">
          <input  type="number" v-model="totalCarbs" placeholder="Carbohydrates">
          <input  type="number" v-model="dietaryFiber" placeholder="Dietary Fiber">
          <input  type="number" v-model="sugars" placeholder="Sugars">
          <input  type="number" v-model="protein" placeholder="Protein">
          <input  type="number" v-model="sodium" placeholder="Sodium">
          <input  type="number" v-model="cholesterol" placeholder="Cholesterol">
          <input  type="number" v-model="fats" placeholder="Fats"> -->
        </div>
        <div>
          <div id="img_sample_container">
            <img id="img_sample" v-bind:src=recipePicture alt="">
            
          </div>
          <span class="imgDemoTitle">Picture Demo</span>
        </div>
      </div>
      <div class="buttons">
        <!-- <button>Cancel</button> -->
        <button @click="saveIngredient">Save</button>
      </div>
    </div>
</template>

<style scoped>
/* STYLE FOR CARD */
    .card {
      text-align: center;
      border: 2px solid #e7e7e7;
      border-radius: 4px;

      /* grid-template-columns: repeat(auto-fill, 1fr); */

      /* height: 289px;
      width: 289px; */
      /* text-overflow: ellipsis; */
    }

    .addNewIngredient {
      display: flex;
      
    }

    .inputLabels {
      flex: 1;
      text-align: right;
    }

    .inputFields {
      flex: 2;
      max-width: 148px;
      text-align: left;
      margin-right: 460px;
    }

    #img_sample_container {
      flex: 3;
      height: 150px;
      max-width: 289px;
      max-height: 250px;
      margin-right: 100px;
      text-align: left;
    }


    #img_sample {
      height: 150px;
      width: 285px;
      object-fit: cover;

    }

    .imgDemoTitle {
      margin-right: 100px;
    }

    .buttons {
      text-align: center;
      margin-right: 100px;
      margin-bottom: 5px;
      margin-top: -25px;
    }
    .buttons > button {
      margin-left: 10px;
    }

    /* #card_picture_container {
      margin-top: 2.5%;
      height: 150px;
      max-width: 289px;
      max-height: 250px;
    } */

    /* #menu_picture {
      height: 157px;
      width: 285px;
      object-fit: cover;

    } */

    /* #card_title {
      text-align: left;
      margin-left: 5px;
      margin-top: 3%;
      margin-bottom: -12%;
    } */

    /* #card_rating {
      text-align: right;
    }

    #card_rating > span {
      margin-right: 8%;
      margin-left: -9.2%;
    }

    .ratestar {
      height: 11%;
      width: 11%;
      margin-top: 2%;
      margin-bottom: -3.5%;
      margin-right: 2%;
    } */
</style>
  