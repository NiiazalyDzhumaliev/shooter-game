import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
    // this.scene.start('Preloader');
  }
}
