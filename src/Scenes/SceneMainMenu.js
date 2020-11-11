import Phaser from 'phaser';
// import SceneMain from './SceneMain';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.image('sprBtnPlay', 'src/assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'src/assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'src/assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'src/assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'src/assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'src/assets/sprBtnRestartDown.png');

    this.load.audio('sndBtnOver', 'src/assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'src/assets/sndBtnDown.wav');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('MainScene');
    }, this);
  }
}
