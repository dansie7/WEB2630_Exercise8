<template>
    <div>
        <div v-show="$route.params.id === 'panda'">
            <div class="panda"></div>
            <h1>Giant Panda</h1>
            <p class="lead">Living within the temperate forests of southwest China, Giant Panda's love themselves some good bamboo to munch on. Panda's with their iconic black patchy eyes and ears can grow over 4 feet tall and weigh anywhere from 220-330 lbs. Cows are 5 times heavier. For more interesting facts visit <a href="https://www.worldwildlife.org/species/giant-panda" target="_blank">www.worldwildlife.org</a>  </p>

            <!--DONE Passing Query Paramerters-->
            <router-link tag="button" class="btn btn-danger" :to="{ name:'animalStatus', params: { id: $route.params.id }, query: { status: 'vulnerable', population: 1 + ',' + 864 }}"
   >What's My Endangered Status?</router-link>
        </div>

        <div v-show="$route.params.id === 'rhino'">
            <div class="rhino"></div>
            <h1>Black Rhino</h1>
            <p class="lead">Roaming the eastern coastal savannah deserts of Africa, the Black Rhino dropped in numbers due to hunters and continues to struggle due to illegal poaching.  With two horns and weighing anywhere from 1,760 to 3,080 lbs, the Black Rhino is definitely a force to be reckoned with. For more interesting facts visit <a href="https://www.worldwildlife.org/species/black-rhino" target="_blank">www.worldwildlife.org</a></p>

            <!--DONE Passing Query Paramerters-->
            <router-link tag="button" class="btn btn-danger" :to="{ name:'animalStatus', params: { id: $route.params.id }, query: { status: 'critical', population: 5 + ',' + 500 }}"
   >What's My Endangered Status?</router-link>
        </div>

        <div v-show="$route.params.id === 'elephant'">
            <div class="elephant"></div>
            <h1>African Forest Elephant</h1>
            <p class="lead">African Forest Elephants live in the tropical forests of Africa, largely in the Republic of Congo and Gabon. They can get 8 to 10 feet tall and weigh anywhere from 2 to 5 tons.  That's as heavy as 4 to 10 grand pianos. For more interesting facts visit <a href="https://www.worldwildlife.org/species/african-forest-elephant" target="_blank">www.worldwildlife.org</a></p>

            <!--DONE Passing Query Paramerters-->
            <router-link tag="button" class="btn btn-danger" :to="{ name:'animalStatus', params: { id: $route.params.id }, query: { status: 'critical', population: '< ' + 100 + ',000' }}"
   >What's My Endangered Status?</router-link>
        </div>

        <div  v-show="$route.params.id === 'gorilla'">
            <div class="gorilla"></div>
            <h1>Cross River Gorilla</h1>
            <p class="lead">Being found within the Congo Basin, Cross River Gorilla numbers have been estimated to the 300 remark.  The forests in which they call home is being developed and cleared for agriculural purposes, pushing the gorilla out. For more interesting facts visit <a href="https://www.worldwildlife.org/species/cross-river-gorilla" target="_blank">www.worldwildlife.org</a></p>

            <!--DONE Passing Query Paramerters-->
            <router-link tag="button" class="btn btn-danger" :to="{ name:'animalStatus', params: { id: $route.params.id }, query: { status: 'critical', population: 200 + ' - ' + 300 }}"
   >What's My Endangered Status?</router-link>
        </div>
        <button class="btn btn-primary" style="margin-top: 20px;" @click="backToAnimals">Back to List</button>
    </div>
</template>

<script>
export default {
    methods: {
        backToAnimals () {
            this.$router.push( {name: 'animalList'} )
        }
    },
}
</script>

<style scope>
.panda {
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
}

.rhino {
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmhpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
}

.elephant {
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
}

.gorilla {
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1515513284006-9a59075694b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdvcmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
}
</style>