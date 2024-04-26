<script setup>
import { ref, watchEffect } from 'vue'
import Card from '../components/Card.vue';
import { fetchCards } from '../../src/api/api.js'

const cards = ref([]);

watchEffect(async () => {
    cards.value = await fetchCards()
})

</script>

<template>
    <div class="dashboard">
      <div class="card_container">
        <Card
          v-for="card in cards"
          :id="card._id"
          :title="card.name"
          :picture="card.picture"
          :rating="card.rating"
          :favorite="card.favorite"
          >
        </Card>
      </div>
    </div>
  </template>
  
  <style>


    .card_container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column: auto;
        gap: 20px;
    }
    

  </style>