class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
           }
           this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Bounce Quest', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2, '(F) to bounce and hold it to go higher.', menuConfig).setOrigin(0.5);
           
           menuConfig.backgroundColor = '#00FF00';
           menuConfig.color = '#000';
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Go until you fall, see how high your score can be', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Press R when you fall off to reset', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*3 + borderPadding*3, 'Press C for credits', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2+ borderUISize*4 + borderPadding*4, '(Enter) to start.', menuConfig).setOrigin(0.5);
           keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
           keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start('playScene');
            
            this.sound.play('select');
        }
        if(Phaser.Input.Keyboard.JustDown(keyC)){
            this.scene.start('creditScene');
            this.sound.play('select');
        }
    }
    preload(){
        this.load.audio('squish', './assets/BallSplash.wav');
        this.load.audio('theme', './assets/gba2complete.mp3');
        this.load.audio('select', './assets/vgmenuhighlight.wav');
        this.load.audio('credits', './assets/Bitmud-RAW808-beansjam-mobile-credits-loop-2018-10-14.wav');
        this.load.audio('death', './assets/195952__minian89__swing_blood_splatter.mp3');
        this.load.audio('waterdrop', './assets/371274__mafon2__water-click.wav');
    }
}