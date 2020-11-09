import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
    preload() {
        this.game.stage.backgroundColor = '#000';
        this.load.image('loaderBg', 'src/assets/loader-bg.png');
        this.load.image('loaderBar', 'src/assets/loader-bar.png');
    }
   
    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }
};
