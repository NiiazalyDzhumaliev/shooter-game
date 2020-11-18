import Phaser from 'phaser';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.image('sky', './assets/sky.png');
    this.load.image('sprBtnPlay', './assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', './assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', './assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', './assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', './assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', './assets/sprBtnRestartDown.png');

    this.load.audio('sndBtnOver', './assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', './assets/sndBtnDown.wav');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.05 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.05 }),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.4,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover'); 
      this.sfx.btnOver.play(); 
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('InputScene');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);
  }
}
