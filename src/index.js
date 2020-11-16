import Phaser from 'phaser';
import BootScene from './Scenes/BootScene';
import config from './Config/config';
import MainMenuScene from './Scenes/MainMenuScene';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('MainMenu', MainMenuScene);
    this.scene.start('MainMenu');
    this.scene.add('GaimScene', GameScene);
    this.scene.add('GameOverScene', GameOverScene);
  }
}

window.game = new Game();
