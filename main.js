const vm = new Vue({
    el: "#app",
    data() {
        return {
            health: 100,
            ended: false,
            healthColor: 'green',
            leftPunch: false,
            rightPunch: false,
            gameStart: false,
            quotePage: true
        }
    },

    methods: {
        leftHook: function() {
            this.leftPunch = !this.leftPunch
            this.$refs.punchSound.play();


        },
        rightHook: function() {
            this.rightPunch = !this.rightPunch
            this.$refs.slap.play();

        },

        startGame: function(e) {
            this.gameStart = !this.gameStart
            this.quotePage = !this.quotePage
            this.$refs.audioBell.play();
        }
    },

})