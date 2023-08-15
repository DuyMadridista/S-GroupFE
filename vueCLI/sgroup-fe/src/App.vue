<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue';
import SideBar from './components/layout/SideBar.vue';


</script>

<template>
  <main>
    <div>
      <Notifications :duration="10000" :closeOnClick="true" :reverse="true"/>
      <RouterView/>
    </div>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  display: block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
