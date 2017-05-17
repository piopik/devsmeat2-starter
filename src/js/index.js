import io from 'socket.io-client';
import config from './config';
import Vue from "vue/dist/vue.js";

window.onload = () => {
    document.querySelector('#app').classList.remove('loading');
};

let socket = io.connect(config.engine);

let app = new Vue({
    data : {},

    methods : {},

    filters : {},

    created : function(){

        this.socket.on("joined",function(res) {

        });

        this.socket.on("question",function(res) {

        });

        this.socket.on("questionResult",function(res) {

        });

        this.socket.on("questionFinish",function() {

        });

        this.socket.on("leaderboard",function(res) {

        });

        this.socket.on("leaderboardFinish",function() {

        });

        this.socket.on("gameFinish",function(res) {

        });

        this.socket.on("message",function(res) {

        });

    },

    mounted : function() {

    },
});

app.$mount('#app');
