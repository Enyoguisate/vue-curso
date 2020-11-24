function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function getHealthBarStyle(healthValue) {
    if(healthValue <= 0) {
        healthValue = 0;
    }
    let healthBarStyle = null;
    if (+healthValue > 70) {
        healthBarStyle = { width: healthValue + '%' };
    } else if (+healthValue <= 70 && +healthValue > 30) {
        healthBarStyle = { width: healthValue + '%', backgroundColor: 'orange' };
    } else {
        healthBarStyle = { width: healthValue + '%', backgroundColor: 'red' };
    }
    return healthBarStyle;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: '',
            battleLog: []
        }
    },
    watch: {
        monsterHealth(monsterHp) {
            if (monsterHp <= 0 && this.playerHealth <= 0) {
                this.winner = 'Draw!';
            } else if (monsterHp <= 0) {
                this.monsterHealth = 0;
                this.winner = 'You Won!';
            }
        },
        playerHealth(playerHp) {
            if (playerHp <= 0 && this.monsterHealth <= 0) {
                this.winner = 'Draw!';
            } else if (playerHp <= 0) {
                this.playerHealth = 0;
                this.winner = 'You Lost!';
            }
        }
    },
    computed: {
        getMonsterHealthBar() {
            return getHealthBarStyle(this.monsterHealth);
        },
        getPlayerHealthBar() {
            return getHealthBarStyle(this.playerHealth);
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const damage = getRandomValue(5, 12);
            this.monsterHealth -= damage;
            this.registerLog('player', 'attack', damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);
            this.playerHealth -= damage;
            this.registerLog('monster', 'attack', damage);
        },
        specialAttack() {
            this.currentRound++;
            const damage = getRandomValue(10, 25);
            this.monsterHealth -= damage;
            this.registerLog('player', 'special attack', damage);
            this.attackPlayer();
        },
        heal() {
            const health = getRandomValue(8, 20);
            if (this.playerHealth > 0 && this.playerHealth + health <= 100) {
                this.currentRound++;
                this.playerHealth += health;
                this.registerLog('player', 'heal', health);
            }
            this.attackPlayer();
        },
        surrender() {
            this.playerHealth = 0;
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = '';
            this.currentRound = 0;
            this.battleLog = [];
        },
        registerLog(who, what, value) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
                round: this.currentRound
            });
        }

    }
});

// Vue.filter('reverse', function(value) {
//     return value.slice().reverse();
// });

app.mount('#game')