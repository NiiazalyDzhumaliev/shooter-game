import Phaser from 'phaser';
import config from './Config/config';
import SceneMainMenu from './Scenes/SceneMainMenu';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('MainMenu', SceneMainMenu);
    this.scene.start('MainMenu');
    this.scene.add('GaimScene', GameScene);
    this.scene.add('GameOverScene', GameOverScene);
  }
}

window.game = new Game();
