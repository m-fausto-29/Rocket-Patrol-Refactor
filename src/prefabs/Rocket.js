// Rocket Prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame    

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update(){
        // left/right movement
        // if the rocket is firing, movement is not allowed
        // use the pointer as the user movement input
        // code adapted from:
        //  https://phaser.io/examples/v3/view/games/breakout/breakout
        mouse.on
        (
            "pointermove", // event
            (pointer) => // callback
            {
                if(!this.isFiring)
                {
                    this.x = Phaser.Math.Clamp(pointer.x, 47, 578);
                }
            },
            this
        );
       
        // fire button
        if(mouse.activePointer.leftButtonDown() && !this.isFiring) 
        {
            this.isFiring = true;
            this.sfxRocket.play(); // play the rocket sfx
        }
        /*
        // if fired, move up
        if(this.isFiring && this.y >= 108) this.y -= 2;
        // reset on miss
        if(this.y <= 108)
        {
            this.isFiring = false;
            this.y = 431;
        }
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        */
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}