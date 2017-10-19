<template>
  <div id="app">

  </div>
</template>

<script>
  import io from 'socket.io-client'
  import config from './../config'
  import Vue from "vue/dist/vue.js"

  window.onload = () => {
    document.querySelector('#app').classList.remove('loading');
  };

  let socket = io.connect(config.engine);

  export default {
    components: {},
    data() {
      return {
        socket: socket,
        user: {},
        timer: {
          value: 0,
          max: 0
        },
        toaster: {
          state: {},
          data: []
        },
        question: {},
        leaderboard: {},
        result: {
          state: {
            active: false,
            correct: false,
            points: 0
          }
        }
      }
    },
    methods: {
      sendAnswer: function (id) {
        this.socket.emit('answer', {
          'answer': [id]
        })
      },
      shuffle: function (array) {
        for (let i = array.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [array[i - 1], array[j]] = [array[j], array[i - 1]]
        }
      }
    },
    created: function () {

      const self = this;

      this.socket.on("joined", (res) => {
        self.user = res.user
        self.user.position = false
        self.user.points = 0

        config.questionTime = res.answerTime
        config.leaderboardTime = res.leaderboardTime
      })

      this.socket.on("question", (res) => {})

      this.socket.on("questionResult", (res) => {})

      this.socket.on("questionFinish", () =>{})

      this.socket.on("leaderboard", (res) => {})

      this.socket.on("leaderboardFinish", () => {})

      this.socket.on("gameFinish", (res) => {
      })

      this.socket.on("message", (res) => {
        self.toaster.data.push(res)
      })

    },
    mounted: function () {}
  }
</script>

<style lang="less">
  @import './../styles/variables.less';

  #app {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    font-family: @font-family-sans-serif;

    background: radial-gradient(@purple-light, @purple-dark);

    .centercontainer {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      perspective: 500px;

      &.inactive {
        pointer-events: none;
      }
    }

    &.loading {
      .centercontainer {
        display: none;
      }

      .toaster {
        display: none;
      }
    }
  }
</style>
