import Phaser from 'phaser';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import config from './Config/config';
import MainMenuScene from './Scenes/MainMenuScene';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('MainMenu', MainMenuScene);
    this.scene.add('GaimScene', GameScene);
    this.scene.add('GameOverScene', GameOverScene);
  }
}

window.game = new Game();
