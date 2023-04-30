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
    Sprites are moving too slow
    fast ship continues to overlap with borders
    high score does not persist
    adjust timer to account for hard mode with 45 seconds
*/