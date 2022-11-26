import Home from './components/Home.vue'
import Animal from './components/Animal.vue' 
import AnimalList from './components/AnimalList.vue'
import AnimalInfo from './components/AnimalInfo.vue'
import AnimalStatus from './components/AnimalStatus.vue'
import Mystery from './components/Mystery.vue'

export const routes = [
 
    {path: '', component: Home, name: 'home'},
    {path: '/mystery', component: Mystery, name: 'mystery'},
    {path: '/animal', component: Animal, name: 'animal', children: [
        { path: '', component: AnimalList, name: 'animalList' },
        { path: ':id', component: AnimalInfo },
        { path: ':id/edit', component: AnimalStatus, name: 'animalStatus' }
    ]},
    //DONE Only allow user to see pages that have routes
    //DONE Use wildcard operator and redirect
    {path: '*', redirect: '/'}

]

