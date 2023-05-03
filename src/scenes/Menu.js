// Menu Scene
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload() {
        this.load.image('title', './assets/titlescreen.png');   // load title screen
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_explosion2', 'assets/rand_explode1.wav'); // 4 new random explosion sfx
        this.load.audio('sfx_explosion3', 'assets/rand_explode2.wav');
        this.load.audio('sfx_explosion4', 'assets/rand_explode3.mp3');
        this.load.audio('sfx_explosion5', 'assets/rand_explode4.mp3');
        this.load.audio('rock_explosion', 'assets/rock_explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio("bg_music", "./assets/space-traveller.wav"); // for background music
    }

    create(){

        // add titlescreen
        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'title').setOrigin(0, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                fastshipSpeed: 3 + 2,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                fastshipSpeed: 4 + 2,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
    
}