// SpaceshipChallenge prefab
class SpaceshipChallenge extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue + 20;   //store pointValue
        this.moveSpeed = game.settings.fastshipSpeed;         //pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 15) {
            this.reset();
        }
    }

    increaseSpeed(multiplier) // increasing ship's speed
    {
        this.moveSpeed *= multiplier;
    }

    // position reset
    reset() {
        this.x = this.x + 620;
    }
}