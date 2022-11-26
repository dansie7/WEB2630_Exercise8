<template>
    <div>
        <h1>Mystery Animal</h1>
        <p class="lead">Click below to see who the mystery animal of the month is!</p>

        <div v-if="show" @click="show = !show" class="container" style="">
            <h2>?</h2>
        </div>
            <div v-if="!show" @click="show = !show" class="container container2 overlay">
            <h2 class="overlay">Sunda Tiger</h2>
            <p class="lead content">Confined to the Island of Sumatra, it is estimated that less than 400 Sunda Tigers exist.  Mostly due to habitat loss and poaching, these tigers are holding on the best they can, but could face extinction if left unmonitored and protected.</p>
        </div>
        
        <button style="margin-top: 20px;" class="btn btn-primary" @click="goHome">Go Home</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {
        goHome () {
            this.$router.push( {name: 'home'} )
        }
    }
        
    }

</script>

<style scoped>
.container {
    background-color: rgb(172, 51, 253);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 500px;
    border-radius: 24px;
    border: 10px dashed rgb(252, 15, 220);
}

.container2 {
    background-image: url("https://images.unsplash.com/photo-1615824996195-f780bba7cfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: end;
    border: none;
}


h2 {
    color: rgb(255, 6, 89);
    font-size:20rem;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgb(252, 78, 144);
}

h2.overlay {
    font-size: 3rem;
    text-shadow: 2px 2px 2px #000;
    background-color: rgba(0, 0, 0, .5);
    padding: 8px;
}

p.content {
    color: white;
    background-color: rgba(0, 0, 0, .5);
    padding: 8px;
}
</style>
