<template>
    <div class="container" style="flex-direction: column !important;">
        <h1>Endangered Status</h1>

        <div v-show="$route.params.id === 'elephant'" class="status1">
            <!--DONE Displaying Query Parameters-->
            <h2> {{ $route.query.status }}</h2>
            <i class="fa fa-battery-1" style="font-size:48px;color:white"></i>
            <h4> Population: {{ $route.query.population }}</h4>
            <button class="btn btn-primary" style="margin-top: 20px;" @click="backTo('elephant')">Back to Elephant</button>
        </div>

        <div v-show="$route.params.id === 'gorilla'" class="status1">
            <!--DONE Displaying Query Parameters-->
            <h2> {{ $route.query.status }}</h2>
            <i class="fa fa-battery-1" style="font-size:48px;color:white"></i>
            <h4> Population: {{ $route.query.population }}</h4>
            <button class="btn btn-primary" style="margin-top: 20px;" @click="backTo('gorilla')">Back to Gorilla</button>
        </div>

        <div v-show="$route.params.id === 'rhino'" class="status1">
            <!--DONE Displaying Query Parameters-->
            <h2> {{ $route.query.status }}</h2>
            <i class="fa fa-battery-1" style="font-size:48px;color:white"></i>
            <h4> Population: {{ $route.query.population }}</h4>
            <button class="btn btn-primary" style="margin-top: 20px;" @click="backTo('rhino')">Back to Rhino</button>
        </div>

        <div v-show="$route.params.id === 'panda'" class="status2">
            <!--DONE Displaying Query Parameters-->
            <h2> {{ $route.query.status }}</h2>
            <i class="fa fa-battery-2" style="font-size:48px;color:white"></i>
            <h4> Population: {{ $route.query.population }}</h4>
            <button class="btn btn-primary" style="margin-top: 20px;" @click="backTo('panda')">Back to Panda</button>
        </div>
       
    </div>
</template>

<script>
export default {
    methods: {
        backTo (id) {
            this.$router.push( {path: '/animal' + '/' + id} )
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.status1 {
    background-color: rgb(255, 0, 34);
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    border-radius: 24px; 
    flex-direction: column;
}

.status2 {
    background-color: rgb(174, 0, 255);
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-radius: 24px; 
    flex-direction: column;
}

h2 {
    font-size: 10rem;
    color: white;
}

h4 {
    color: white;
}
</style>