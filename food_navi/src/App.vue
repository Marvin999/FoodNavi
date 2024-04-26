<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 id="AppTitle">Food Navi</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mealplan">MealPlan</RouterLink>
        <RouterLink to="/pantry">Pantry</RouterLink>
        <RouterLink to="/recipes/create">Create</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  min-height: 100%;
  width: 120%;
  margin-left: -10%;
  background-image: url("https://static.vecteezy.com/system/resources/previews/027/748/857/large_2x/old-wood-texture-background-floor-surface-rustic-wooden-background-photo.jpg");
  /* background-repeat: no-repeat; */
  background-size: cover;
}

.wrapper {
  background: white;
  opacity: .65;
}

#AppTitle {
  text-align: center;
  color:chocolate;
  font-size: 60px;
  font-weight: bold;
  font-family: cursive;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

}

nav a.router-link-exact-active {
  color: var(--color-text);
  /* text-decoration: none; */
  color:chocolate;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;

  padding: 0 1rem;
  border-left: 1px solid rgb(90, 90, 90);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    /* text-align: left; */
    margin-left: -1rem;
    font-size: 2rem;

    padding: .2rem 0;
    margin-bottom: .5rem;
    margin-top: 1rem;
  }
}
</style>
