import Phaser from 'phaser';
import ScrollingBackground from '../Objects/ScrollingBackground';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('sprBg0', 'src/assets/sprBg0.png');
    this.load.image('sprBg1', 'src/assets/sprBg1.png');
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
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.btnRestart.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('MainScene');
    }, this);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
