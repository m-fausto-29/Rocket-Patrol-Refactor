// main file
/*
Name: Monserrat Fausto
Mod Title: Rocket Patrol: Return of the Rocket
Estimated Hours: 11.5 hours
List of Mods: 
 - Crashing into non-ship object lose points (20): Approved by TA and Nathan, I created a separate class for this object and named it 'Asteroid'
    the idea being that the player would lose points if they hit this type of object and must try to avoid hitting it to avoid this outcome.
    After meeting with Nathan, I included additional assets to this including new animation, sfx, and appearance.
 - Create a new scrolling tile sprite for the background (5)
 - Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
 - Implement the speed increase that happens after 30 seconds in the original game (5)
 - Display the time remaining (in seconds) on the screen (10)
 - Implement mouse control for player movement and mouse click to fire (15)
 - Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
 - Create 4 new explosion sound effects and randomize which one plays on impact (10)
 - Create a new title screen (e.g., new artwork, typography, layout) (10)
 - Implement the 'FIRE' UI text from the original game (5)
Citations:
 - Base code by Nathan Altice
 - freesound.org: Used to find copyright-free sfx and background music
 - pixilart.com: Used to create custom sprites, title screen, and new scrolling tile sprite for background
 - Used as reference for random sfx: https://stackoverflow.com/questions/39604400/play-a-random-sound-on-single-button
 - Used as reference for mouse movement and clicking: https://steemit.com/utopian-io/@onepice/move-objects-according-to-the-mouse-position-with-phaser-3
 - Used as reference for time display: https://stackoverflow.com/questions/63870145/phaser-3-create-a-game-clock-with-minutes-and-seconds
*/
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

// set mouse controls;
let mouse;
