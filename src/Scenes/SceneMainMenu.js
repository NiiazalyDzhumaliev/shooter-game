import 'phaser';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  preload() {
    // load images
    this.load.image('logo', 'src/assets/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
