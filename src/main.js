// main file
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ] 
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//set high score
let highScore = 0;

// set mouse controls;
let mouse;

// Current issues
/*
    high score does not persist - look up more resources on how they're tracking the high score
    all else fails switch to the alternating player and fire ui text 
*/