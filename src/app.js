import "babel-polyfill";

// let the magic begin
import Vue from 'vue';
import Intro from './Intro.vue';


// the main component
new Vue({
    el:"#main",
    components:{
        'intro-guy':Intro
    },
    template: `<intro-guy></intro-guy>`
})
