class Credits extends Phaser.Scene{
    constructor(){
        super("creditScene");
    }
    create(){
        this.credits = this.sound.add('credits');
        this.credits.play();
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
           this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Credits', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2, 'Credits Music: https://opengameart.org/content/bjm-credits-loop-beansjam-mobile-2018', menuConfig).setOrigin(0.5);
           menuConfig.backgroundColor = '#00FF00';
           menuConfig.color = '#000';
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Main Theme: https://opengameart.org/content/title-y', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Ball Sound: https://freesound.org/people/Ryanz-Official/sounds/646568/', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*3 + borderPadding*3, 'Select Sound: https://opengameart.org/content/8bit-menu-highlight', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*4 + borderPadding*4, 'splatter://https://freesound.org/people/minian89/sounds/195952/', menuConfig).setOrigin(0.5);
           this.add.text(game.config.width/2, game.config.height/2 + borderUISize*5 + borderPadding*5, 'Press ENTER to next page', menuConfig).setOrigin(0.5);
           //https://freesound.org/people/minian89/sounds/195952/
           
           keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        }
        update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start("othercreditScene");
            this.credits.stop();
            //this.credits.stop();
            
            //this.sound.play('');
        }
    }
}