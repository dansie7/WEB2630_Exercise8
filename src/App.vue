<template>
  <div class="container">
    <div class="row">
      
        <hr>
        <app-header></app-header>
        <hr>
        <!--DONE Animation & Transition on route-view-->
        <transition mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut">
          <router-view></router-view>
        </transition>

      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
.row {
 width: 100%;
}

</style>
