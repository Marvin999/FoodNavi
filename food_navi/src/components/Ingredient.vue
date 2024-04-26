

<script setup>
import { toRefs } from 'vue'
import { useRouter } from 'vue-router';

import { deleteIngredient  } from '../../src/api/api.js'

const router = useRouter();



const props = defineProps({
  picture: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  servingsize: {
    type: Number,
    required: false
  }
})

const removeIngredient = async() => {
  deleteIngredient(props.id)
}



</script>

<template>
    <div class="card">
        <!-- This is a Card! -->
        <div id="card_title">
            <h3> {{ title }} </h3>
            
        </div>
        <div id="card_picture_container">
          <img id="menu_picture" v-bind:src=props.picture alt=""/>
        </div>
        <div class="cardFooter">
          <span class="amountLabel"> Amount:</span>
          <span class="amount"> {{ servingsize }}</span>
          <button @click="removeIngredient">Remove</button>
        </div>

    </div>
</template>

<style scoped>
/* STYLE FOR CARD */
    .card {
      border: 2px solid #e7e7e7;
      border-radius: 4px;

      grid-template-columns: repeat(auto-fill, 1fr);

      height: 170px;
      width: 169px;
      text-overflow: ellipsis;
    }

  
    #card_picture_container {
      margin-top: 2.5%;
      /* height: 140px; */
      max-width: 165px;
      /* max-height: 140px; */
    }

    #menu_picture {
      height: 110px;
      width: 165px;
      object-fit: cover;

    }

    #card_title {
      text-align: center;
      margin-left: 5px;
      margin-bottom: -3%;
    }


    .cardFooter {
      display: flex;
    }

    .amountLabel {
      flex: 1;
      margin-left: 5px;
    }
    .amount {
      flex: 2;
    }

   
    .cardFooter > button {
      flex: 3;
      height: 20px;
    }


</style>
  