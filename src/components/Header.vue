<template>
    <div>
        <ul class="nav nav-pills">
            <!--DONE Router Links to 1 Home Component & 2 Custom Components-->
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/animal" tag="li" active-class="active"><a>Endangered</a></router-link>
            <router-link to="/mystery" tag="li" active-class="active"><a>Mystery</a></router-link>
        </ul>
    </div>
</template>