class OtherCredits extends Phaser.Scene{
    constructor(){
        super("othercreditScene");
    }
    create(){
        this.credits = this.sound.add('credits');
        this.credits.play();
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '10px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
           }
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Credits 2', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'code inspiration: https://www.emanueleferonato.com/2018/12/06/html5-endless-runner-built-with-phaser-and-arcade-physics-step-3-adding-textures-to-platforms-and-coins-to-collect/', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'waterdrop: https://freesound.org/people/Mafon2/sounds/371274/', menuConfig).setOrigin(0.5);
        
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Main Theme: https://opengameart.org/content/title-y', menuConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Ball Sound: https://freesound.org/people/Ryanz-Official/sounds/646568/', menuConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize*3 + borderPadding*3, 'Select Sound: https://opengameart.org/content/8bit-menu-highlight', menuConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize*4 + borderPadding*4, 'splatter://https://freesound.org/people/minian89/sounds/195952/', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*5 + borderPadding*5, 'Press ENTER to leave', menuConfig).setOrigin(0.5);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start("menuScene");
            this.credits.stop();
            //this.credits.stop();
            
            //this.sound.play('');
        }
    }
}