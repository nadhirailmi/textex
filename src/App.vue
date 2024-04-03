<template>
  <navbar/>
  <hero/>
  <about/>
</template>

<script>
import navbar from './components/NavBar.vue'
import hero from './components/HeRo.vue'
import about from './components/AboutUs.vue'

export default {
  name:"app",
  components:{
    navbar,
    hero,
    about,
  }
}
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>