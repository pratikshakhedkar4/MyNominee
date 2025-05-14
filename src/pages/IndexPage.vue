<template>
  <q-page class="flex flex-center">
    <q-card class="my-card q-ma-md" flat bordered v-for="card in cards" :key="card.id" @click="navigate(card.route)">
      <q-img :src="card.image">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ card.name }}
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import accountImg from '../assets/HomePage/profile.png';
import policyImg from '../assets/HomePage/policy.png';
import nomineeImg from '../assets/HomePage/nominee.png';
import { $router } from 'boot/router';
defineOptions({
  name: 'IndexPage',
});
const cards = ref([
  {
    id: 1,
    name: 'My Account',
    image: accountImg,
    route: 'myAccount'
  },
  {
    id: 2,
    name: 'Policies',
    image: policyImg,
    route: 'policies'
  },
  {
    id: 3,
    name: 'Nominees',
    image: nomineeImg,
    route: ''
  }

])
function navigate(name) {
  $router.push({ name: name });
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>  
