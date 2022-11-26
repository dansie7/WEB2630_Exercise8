<template>
    <div>
        <h1>Select an Animal</h1>
        <hr>
        <div class="container">
       
            <div class="tile">
                <router-link  tag="img" to="/animal/panda" src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" style="cursor: pointer"></router-link>
                <h3>Giant Panda</h3>
            </div>
          
            <div class="tile">
                <router-link tag="img" to="/animal/rhino" src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjByaGlub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" style="cursor: pointer"></router-link>
                <h3>Black Rhino</h3>
            </div>
           
            <div class="tile">
                <router-link tag="img" to="/animal/elephant" src="https://images.unsplash.com/photo-1665070085362-879c9fc71d44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBmb3Jlc3QlMjBlbGVwaGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" style="cursor: pointer"></router-link>
                <h3>African Forest Elephant</h3>
            </div>
     
            <div class="tile">
                <router-link tag="img" to="/animal/gorilla" src="https://images.unsplash.com/photo-1588889723935-38872d4bc4b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvcmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" style="cursor: pointer"></router-link>
                <h3>Cross River Gorilla</h3>
            </div>
           
            
        </div>

       
    </div>
</template>

<style scoped>
img {
    border-radius: 50%;
    width: 100%;
    opacity: 1;
    transition: opacity .5s ease, width .5s ease;
    padding: 20px;
    }

img:hover {
    width: 101%;
    opacity: .5;
}

.container {
display: flex;
flex-direction: row !important;
flex-wrap: wrap;

}

.tile {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 50%;

}

h3 {
    position: absolute;
    margin: 0px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 2px #000;
}


</style>