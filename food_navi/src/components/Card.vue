

<script setup>
import { toRefs } from 'vue'
import { useRouter } from 'vue-router';

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
  rating: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
  ,
  favorite: {
    type: Boolean,
    required: true
  }
})

// const {id} = toRefs(props)

const openRecipe = () => {
  // console.log("OpenRecipe", id.value);
  router.push(`recipes/${props.id}`)
}


</script>

<template>
    <div class="card" @click = "openRecipe">
        <!-- This is a Card! -->
        <div id="card_title">
            <h3> {{ title }} </h3>
        </div>
        
        <div id="card_rating">
          <img class="ratestar" v-if="props.favorite" src="../assets/icons8-favorite-48.png" alt="">
          <img class="ratestar" v-else="props.favorite" src="../assets/icons8-favorite-50.png" alt="">

          <!-- <img v-if="recipe.favorite" class="favstar" src="star.png"> -->
          <img class="ratestar" src="../assets/star.png" alt="">
          <span>{{ rating }}</span>
        </div>
        <div id="card_picture_container">
          <img id="menu_picture" v-bind:src=props.picture alt=""/>
        </div>

    </div>
</template>

<style scoped>
/* STYLE FOR CARD */
    .card {
      border: 2px solid #e7e7e7;
      border-radius: 4px;

      grid-template-columns: repeat(auto-fill, 1fr);

      height: 200px;
      width: 289px;
      text-overflow: ellipsis;
    }

    #card_picture_container {
      margin-top: 2.5%;
      height: 150px;
      max-width: 289px;
      max-height: 250px;
    }

    #menu_picture {
      height: 157px;
      width: 285px;
      object-fit: cover;

    }

    #card_title {
      text-align: left;
      margin-left: 5px;
      margin-top: 3%;
      margin-bottom: -12%;
    }

    #card_rating {
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
    }
</style>
  