<template>
    <div>
        <!--DONE Include Animation/Transition with route-view-->
        <transition mode="out-in"
            enter-active-class="animate__animated animate__slideInRight"
            leave-active-class="animate__animated animate__fadeOut">
            <router-view></router-view>
        </transition>
        
        <hr>
        <button class="btn btn-primary" @click="goHome">Go Home</button>
    </div>
</template>


<script>
export default {
    methods: {
        goHome () {
            this.$router.push( {name: 'home'} )
        }
    }
    }
</script>

<style></style>