//Jack O'Brien
//Bounce Quest
//20 hours
//My game uses bounce mechanics for a regular endless runner something I have not seen before
//I am proud of the technique in physics since it feels fluid.
//I looked at class examples for making this technique possible with the pogo skip one
//
//My game unfortunately lacks in the visual department as well as level design.  I wish I spent more time on the level design rather than the physics, but it is what it is.
//The art is decent enough and the animation works for now.  I was trying somthing new, but I ran out of time
// to make it good.  I hope next time I can give a better performance with this.
//
//PS: the game was crashing for some reason.  It had to do with music looping.  If it does crash then, please show me what is wrong with it.
let config = {
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    // width: 1334,
    // height: 750,
    render: {
        pixelArt: true
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 1000
            }
        }
    },
    // spawnRange: [80,300],
    // platformSpeedRange:[300,300],
    // landSizeRange:[32*5,960/4],
    // heightRange:[-5,5],
    // platformVerticalLimit: [0.4,0.8],
    //heightRange:[32,500],
    scene:[Menu, Play, Credits, OtherCredits]
}
let downFlag = false;
let game = new Phaser.Game(config);
let { height, width } = game.config;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keySPACE, keyENTER, keyF, keyR, keyC;